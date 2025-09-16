"use client";

import api, { setAccessToken } from "../lib/api";

export default function LogoutButton() {
  const handleLogout = async () => {
    await api.post("/auth/logout");
    localStorage.removeItem("accessToken");
    setAccessToken(null);
    window.location.href = "/";
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
}
