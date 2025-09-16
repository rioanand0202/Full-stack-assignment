// components/auth/SignupDialog.jsx
import * as Dialog from "@radix-ui/react-dialog";
import AuthForm from "../forms/AuthForm";

export default function SignupDialog() {
  const handleSignup = async (values) => {
    console.log("Signup via modal:", values);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-sm px-4 py-2 rounded-md bg-gradient-to-r from-teal-400 to-teal-600 text-white shadow">
          Sign up
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
          <Dialog.Title className="text-lg font-bold mb-4">
            Create Account
          </Dialog.Title>
          <AuthForm type="signup" onSubmit={handleSignup} />
          <Dialog.Close asChild>
            <button className="absolute top-3 right-3 text-gray-600 hover:text-black">
              ✕
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
