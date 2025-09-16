// app/(auth)/login/page.js
"use client";
import AuthForm from "../../../components/forms/AuthForm";

export default function LoginPage() {
  const handleLogin = async (values) => {
    console.log("Login data:", values);
    // TODO: send to backend via fetch("/api/auth/login", { method: "POST", body: JSON.stringify(values) })
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}
