import Friday from "../helper/Friday";

const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function getAPOD() {
  return await Friday.get(new URL(`${BASE_API_URL}`));
}
