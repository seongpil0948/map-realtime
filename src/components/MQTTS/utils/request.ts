import { ref } from "vue";
import { useTokenStore } from "../composables/token";
import {
  ELoginErrorMessage,
  ERequestCommand,
  IReqOptions,
  ISystemError,
} from "../types";
import { checkTokenExpiredTime, generateLogKey, isEmpty } from "./comlib";

export const prefixUrl: string = import.meta.env.VITE_API_CONTEXT_PATH;
export const refreshLoginUrl = `${prefixUrl}/login`;
export const tokenUpdateFlag = ref<Promise<any> | null>(null);
export const badTokenErrorFlag = ref<boolean>(false);
export const beforeRefreshToken = ref<string>("");

const loginBadTokenMessageBox = (errorCode: string) => {
  if (!badTokenErrorFlag.value) {
    badTokenErrorFlag.value = true;
    if (errorCode === ELoginErrorMessage.LOGIN_BAD_TOKEN) {
      console.error("'다른 휴대폰에서 같은 아이디로 로그인");
    } else if (errorCode === ELoginErrorMessage.LOGIN_CANCEL) {
      console.error("자동 로그인이 해제");
    }
  }
};

// AccessToken 갱신
export const updateAccessToken = () => {
  const { getRefreshToken, setNewToken } = useTokenStore();
  // 토큰 갱신 로직 내부
  if (tokenUpdateFlag.value === null) {
    // beforeRefreshToken 와 refresh token 이 같을 경우 return
    if (getRefreshToken() === beforeRefreshToken.value) return;
    tokenUpdateFlag.value = fetch(refreshLoginUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getRefreshToken()}`,
        "X-Command": ERequestCommand.INDEX,
        "X-LogKey": generateLogKey(),
      },
    }).then((response) => {
      beforeRefreshToken.value = <string>getRefreshToken();
      tokenUpdateFlag.value = null;
      return response.json();
    });
    return tokenUpdateFlag.value.then((value) => {
      if (value.httpStatusCode === 401) {
        if (
          value.code === ELoginErrorMessage.LOGIN_BAD_TOKEN ||
          value.code === ELoginErrorMessage.LOGIN_CANCEL
        )
          loginBadTokenMessageBox(value.code);
        throw value;
      } else {
        setNewToken(value.body.accessToken, value.body.refreshToken);
      }
    });
  }
  return tokenUpdateFlag.value.then((value) => {
    if (value.httpStatusCode === 401) throw value;
    else setNewToken(value.body.accessToken, value.body.refreshToken);
  });
};

export const request = async (url: string, options: IReqOptions) => {
  const { timeout = 10000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const { getAccessToken } = useTokenStore();
  const { method, headers, data, params, body } = options;
  const reqObj: RequestInit = {
    method,
    signal: controller.signal,
  };
  const header = new Headers();

  header.append("X-Command", options.xCommand);
  header.append("X-LogKey", generateLogKey());

  // if (!options.xCommand)
  // console.log('NO-X-COMMAND: ', url)

  // token check
  if (
    (!url.includes("/login") ||
      url === "/login/duplicateTokenCheckPassword" ||
      url === "/login/resettingTokenPassword") &&
    !url.includes("/authentications") &&
    !url.includes("/logout") &&
    url !== "/common/app-version"
  ) {
    if (!isEmpty(<string>getAccessToken())) {
      const expiredTime = checkTokenExpiredTime(<string>getAccessToken());
      if (expiredTime < new Date()) await updateAccessToken();
    }
    header.append("Authorization", `Bearer ${getAccessToken()}`);
  }
  if (headers) {
    for (const key in headers) header.append(key, headers[key]);
  }
  reqObj.headers = header;

  if (data) {
    reqObj.body = JSON.stringify(data);
    header.append("Content-Type", "application/json");
  }
  if (body) reqObj.body = body;

  url = `${prefixUrl}${url}`;
  if (params) {
    Object.keys(params).forEach((key) => {
      if (!params[key]) delete params[key];
    });
    const paramsStr = Object.keys(params)
      .map((key) => `${key}=${params[key]}`)
      .join("&");
    url = `${url}?${paramsStr}`;
  }

  try {
    const response = await fetch(url, reqObj);
    clearTimeout(id);
    if (response.ok) {
      return url.includes("/logout") ? response.ok : response.json();
    } else {
      try {
        throw await response.json();
      } catch (e) {
        // Type Assertion (타입 표명)
        const error = e as ISystemError;
        if (error.code) {
          const message = {
            errorType: "server",
            error,
          };
          window.postMessage(message);
          throw error;
        } else {
          const message = {
            errorType: "nginx",
            error,
          };
          window.postMessage(message);
          throw new Error(
            `알 수 없는 오류가 발생 하였습니다. (${response.status} ${response.statusText})`
          );
        }
      }
    }
  } catch (e) {
    // Type Assertion (타입 표명)
    const error = e as ISystemError;
    const abortError = e as UnderlyingSinkAbortCallback;
    if (
      error.code === ELoginErrorMessage.LOGIN_BAD_TOKEN ||
      error.code === ELoginErrorMessage.LOGIN_CANCEL
    )
      loginBadTokenMessageBox(error.code);

    if (abortError.name === "AbortError") {
      if (url !== "/common/refreshMqttInfo") {
        window.postMessage("timeout");
      }
      throw error;
    }
    if (
      error.message === "Failed to fetch" ||
      error.message === "Load failed"
    ) {
      window.postMessage("networkDisconnected");
      throw error;
    }

    throw error;
  }
};
