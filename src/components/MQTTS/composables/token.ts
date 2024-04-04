import Cookies from "js-cookie";
import { ref } from "vue";

enum EStorageKey {
  ACCESS = "access",
  REFRESH = "refresh",
  USER = "user",
}

export const useTokenStore = () => {
  const accessToken = ref<string | null>(null);
  const refreshToken = ref<string | null>(null);

  function setNewToken(access: string, refresh: string) {
    accessToken.value = access;
    refreshToken.value = refresh;
    setAccessToken(accessToken.value);
    setRefreshToken(refreshToken.value);
  }

  function setAccessToken(token: string) {
    localStorage.setItem(EStorageKey.ACCESS, token);
  }
  function setRefreshToken(token: string) {
    Cookies.set(EStorageKey.REFRESH, token, {
      secure: <boolean>true,
      expires: <number>90,
    });
  }

  function getAccessToken() {
    return accessToken.value || localStorage.getItem(EStorageKey.ACCESS);
  }
  function getRefreshToken() {
    return refreshToken.value || Cookies.get(EStorageKey.REFRESH);
  }

  function removeToken() {
    localStorage.removeItem(EStorageKey.ACCESS);
    Cookies.remove(EStorageKey.REFRESH);
    accessToken.value = "";
    refreshToken.value = "";
  }

  return {
    accessToken,
    removeToken,
    refreshToken,
    setNewToken,
    getAccessToken,
    getRefreshToken,
  };
};
