import axios from "axios";
import toast from "react-hot-toast";
import { getAuthorizationHeader } from "../utils/getAuthorizationHeader";

// Create an Axios instance with a base URL
const axiosInstance = axios.create({
  // baseURL: API_URL,
});

// JavaScript version of the Friday class
export default class Friday {
  static async get(url, options) {
    try {
      const response = axiosInstance.get(url.href, {
        headers: {
          ...options?.headers,
          ...getAuthorizationHeader(),
          "Content-type": "application/json",
        },
      });
      return (await response).data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.error?.message ?? error.response?.data?.message;
        message && options?.showToast === undefined && toast.error(message);
      } else {
        const message = error.message;
        message && options?.showToast === undefined && toast.error(message);
      }
      return null;
    }
  }

  static async post(url, options) {
    try {
      const response = axiosInstance.post(url.href, options?.body, {
        headers: {
          ...options?.headers,
          ...getAuthorizationHeader(),
          "Content-type": "application/json",
        },
      });
      return (await response).data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.error?.message ?? error.response?.data?.message;
        message && options?.showToast === undefined && toast.error(message);
      } else {
        const message = error.message;
        message && options?.showToast === undefined && toast.error(message);
      }
      return null;
    }
  }

  static async put(url, options) {
    try {
      const response = axiosInstance.put(url.href, options?.body, {
        headers: {
          ...options?.headers,
          ...getAuthorizationHeader(),
          "Content-type": "application/json",
        },
      });
      return (await response).data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.error?.message ?? error.response?.data?.message;
        message && options?.showToast === undefined && toast.error(message);
      } else {
        const message = error.message;
        message && options?.showToast === undefined && toast.error(message);
      }
      return null;
    }
  }

  static async delete(url, options) {
    try {
      const response = axiosInstance.delete(url.href, {
        data: options?.body,
        headers: {
          ...options?.headers,
          ...getAuthorizationHeader(),
          "Content-type": "application/json",
        },
      });
      return (await response).data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.error?.message ?? error.response?.data?.message;
        message && options?.showToast === undefined && toast.error(message);
      } else {
        const message = error.message;
        message && options?.showToast === undefined && toast.error(message);
      }
      return null;
    }
  }

  static async upload(url, body, options) {
    try {
      const response = axiosInstance.post(url.href, body, {
        headers: {
          // ...options?.headers,
          ...getAuthorizationHeader(),
          // "Content-type": "application/json",
        },
      });
      return (await response).data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.data?.error?.message ?? error.response?.data?.message;
        message && options?.showToast === undefined && toast.error(message);
      } else {
        const message = error.message;
        message && options?.showToast === undefined && toast.error(message);
      }
      return null;
    }
  }
}
