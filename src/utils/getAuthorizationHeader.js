import Cookies from "js-cookie";

const REFRESH_TOKEN = process.env.NEXT_PUBLIC_REFRESH_TOKEN;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

export function getRefreshToken() {
  return Cookies.get(REFRESH_TOKEN) || "";
}

export function getAccessToken() {
  return Cookies.get(ACCESS_TOKEN) || "";
}

export function getAuthorizationHeader() {
  const token = getAccessToken();

  return {
    Authorization: `Bearer ${token}`,
  };
}
