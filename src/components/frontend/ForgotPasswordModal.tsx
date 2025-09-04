import { useState } from "react";
import Image from "next/image";
type ForgotPasswordModalProps = {
  show: boolean;
  onClose: () => void;
};

export default function ForgotPasswordModal({
  show,
  onClose,
}: ForgotPasswordModalProps) {
  const [email, setEmail] = useState("");

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-8 min-w-[320px] max-w-xs relative">
        {/* Top right close button */}
        <button
          className="absolute right-2 top-2 text-gray-500"
          onClick={onClose}
        >
          ✕
        </button>
        {/* Your Logo (Image) */}
        <Image
          src="/shikalogo.png"
          alt="shika Logo"
          width={200}
          height={200}
          className="h-14 mx-auto mb-4"
        />
        <h2 className="text-xl font-bold mb-2 text-center">Forgot Password</h2>
        <p className="text-sm text-gray-600 mb-4 text-center">
          Enter your registered email to get reset link.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full rounded px-3 py-2 mb-4"
        />
        <button
          className="w-full bg-emerald-500 text-white rounded py-2 font-semibold"
          onClick={() => {
            /* reset link logic */ alert("Password reset link sent!");
            onClose();
          }}
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
}
