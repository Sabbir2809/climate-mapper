import Cookies from "js-cookie";

const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export const useToken = () => {
  return {
    setAccessToken: (accessToken) => {
      Cookies.set(ACCESS_TOKEN, accessToken);
    },
    setRefreshToken: (refreshToken) => {
      Cookies.set(REFRESH_TOKEN, refreshToken);
    },
    setTokens: (accessToken, refreshToken) => {
      Cookies.set(ACCESS_TOKEN, accessToken);
      refreshToken && Cookies.set(REFRESH_TOKEN, refreshToken);
    },
    removeTokens: () => {
      Cookies.remove(ACCESS_TOKEN);
      Cookies.remove(REFRESH_TOKEN);
    },
  };
};
