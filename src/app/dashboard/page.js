// app/dashboard/page.js
// Protected Dashboard page: fetches /api/profile and shows user info

"use client";

import { useEffect, useState } from "react";
import api, { setAccessToken } from "../../lib/api";
import LogoutButton from "../../components/LogoutButton";

export default function Dashboard() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) setAccessToken(token);

    api
      .get("/profile")
      .then((res) => setProfile(res.data))
      .catch((err) =>
        setError(err.response?.data || { error: "Request failed" }),
      );
  }, []);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8 text-red-600">
        <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
        <p>{error.error}</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <LogoutButton />
      </div>

      {/* Welcome */}
      <div className="bg-white shadow rounded-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Welcome back, {profile.user?.name || profile.user?.email} 👋
        </h2>
        <p className="text-gray-600">
          You are now logged in to your secure dashboard.
        </p>
      </div>

      {/* Profile Info */}
      <div className="bg-gray-50 border rounded-md p-6">
        <h3 className="text-lg font-semibold mb-4">Your Profile</h3>
        <ul className="space-y-2 text-gray-700">
          <li>
            <span className="font-medium">User ID:</span> {profile.user?.id}
          </li>
          <li>
            <span className="font-medium">Name:</span> {profile.user?.name}
          </li>
          <li>
            <span className="font-medium">Email:</span> {profile.user?.email}
          </li>
          <li>
            <span className="font-medium">Logged in at:</span>{" "}
            {new Date().toLocaleString()}
          </li>
        </ul>
      </div>
    </div>
  );
}
