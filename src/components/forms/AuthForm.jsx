// components/forms/AuthForm.jsx
// Wrapper for auth forms (Formik + Yup integration)

import { Formik, Form } from "formik";
import * as Yup from "yup";
import AuthInput from "./AuthInput";
import Button from "../Button";

export default function AuthForm({ type, onSubmit }) {
  const isSignup = type === "signup";

  // Yup schema
  const validationSchema = Yup.object({
    name: isSignup ? Yup.string().required("Name is required") : null,
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "At least 6 characters")
      .required("Password is required"),
    confirmPassword: isSignup
      ? Yup.string()
          .oneOf([Yup.ref("password")], "Passwords must match")
          .required("Confirm password is required")
      : null,
  });

  // Initial values
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            {isSignup ? "Create Account" : "Log In"}
          </h2>

          {isSignup && <AuthInput label="Name" name="name" formik={formik} />}
          <AuthInput label="Email" name="email" type="email" formik={formik} />
          <AuthInput
            label="Password"
            name="password"
            type="password"
            formik={formik}
          />
          {isSignup && (
            <AuthInput
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              formik={formik}
            />
          )}

          <Button type="submit" className="w-full mt-4">
            {isSignup ? "Sign Up" : "Log In"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
