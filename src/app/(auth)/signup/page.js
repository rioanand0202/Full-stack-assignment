// app/(auth)/signup/page.js
"use client";
import AuthForm from "../../../components/forms/AuthForm";

export default function SignupPage() {
  const handleSignup = async (values) => {
    console.log("Signup data:", values);
    // TODO: send to backend via fetch("/api/auth/signup", { method: "POST", body: JSON.stringify(values) })
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
}
