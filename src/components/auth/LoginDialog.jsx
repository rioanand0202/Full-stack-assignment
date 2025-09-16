// components/auth/LoginDialog.jsx
import * as Dialog from "@radix-ui/react-dialog";
import AuthForm from "../forms/AuthForm";

export default function LoginDialog() {
  const handleLogin = async (values) => {
    console.log("Login via modal:", values);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-sm px-3 py-2 rounded-md hover:bg-gray-100">
          Log in
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
          <Dialog.Title className="text-lg font-bold mb-4">Log in</Dialog.Title>
          <AuthForm type="login" onSubmit={handleLogin} />
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
