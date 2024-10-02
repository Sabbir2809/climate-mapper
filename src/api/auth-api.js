import Friday from "../helper/Friday";

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function login(body) {
  return await Friday.post(new URL(`${BASE_API_URL}/auth/login`), {
    body,
  });
}

export async function register(body) {
  return await Friday.post(new URL(`${BASE_API_URL}/register`), {
    body,
  });
}

export async function changePassword(body) {
  return await Friday.put(new URL(`${BASE_API_URL}/change-password`), { body });
}

export async function getProfile() {
  return await Friday.get(new URL(`${BASE_API_URL}/profile-details`));
}
