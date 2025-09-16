// lib/api.js
// Axios instance with JWT + refresh token handling

import axios from "axios";

let accessToken = null; // runtime only (you could also keep in Zustand/Redux)

const api = axios.create({
  baseURL: "/api",
  withCredentials: true, // send cookies (refresh token is httpOnly cookie)
});

// Add access token to headers
api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Handle 401: try refresh flow
api.interceptors.response.use(
  (res) => res,
  async (error) => {
    if (error.response?.status === 401 && !error.config._retry) {
      error.config._retry = true;

      try {
        const refreshRes = await axios.post(
          "/api/auth/refresh",
          {},
          { withCredentials: true },
        );
        accessToken = refreshRes.data.accessToken;

        error.config.headers.Authorization = `Bearer ${accessToken}`;
        return api(error.config);
      } catch (refreshErr) {
        console.error("Refresh token failed", refreshErr);
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(error);
  },
);

export function setAccessToken(token) {
  accessToken = token;
}

export default api;
