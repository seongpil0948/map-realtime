import dayjs from "dayjs";

export const isJSONString = (message: string) => {
  try {
    const json = JSON.parse(message);
    return typeof json === "object";
  } catch (error) {
    return false;
  }
};

/**
 * accessToken 유효시간 확인
 * @param token
 */
export function checkTokenExpiredTime(token: string) {
  const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => {
        return `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`;
      })
      .join("")
  );
  return new Date(JSON.parse(jsonPayload).exp * 1000 - 3000);
}

export function handleOverText(text: string, maxLength: number) {
  return text.length <= 8 ? text : `${text.slice(0, maxLength)}...`;
}

/**
 * 랜덤 4자리
 */
export const makeRandom = () => {
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  const string_length = 4;
  let randomString = "";
  for (let i = 0; i < string_length; i++) {
    const rnum = Math.floor(Math.random() * chars.length);
    randomString += chars[rnum];
  }
  return randomString;
};
/**
 * rules YYYYMMDDHHmmSSsss + {랜덤4자리} + {랜덤4자리}
 * ex) 2023 02 03 15 48 21 369 Swgv k22H
 */
export const generateLogKey = () => {
  const dateTimeSecondFormat = dayjs().format("YYYYMMDDHHmmssSSS");
  const first = makeRandom();
  const second = makeRandom();

  return `${dateTimeSecondFormat}${first}${second}`;
};

export const isEmpty = (value: any) => {
  // 빈 값 체크
  const result = false;
  if (value === undefined) return true;

  if (typeof value === "number") {
    if (value === 0) return true;
  } else if (typeof value === "string") {
    if (value === "" || value.length === 0) return true;
  } else if (typeof value === "object") {
    if (Array.isArray(value)) {
      if (value.length === 0) return true;
    } else if (!value) {
      return true;
    } else {
      if (Object.keys(value).length === 0) return true;
    }
  }
  return result;
};
