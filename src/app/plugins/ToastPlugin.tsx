"use client";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { CiCircleCheck } from "react-icons/ci";

interface Props {}
export const ToastPlugin = ({}: Props) => (
  <Toaster
    position="top-right"
    toastOptions={{
      duration: 5000,

      success: {
        icon: <CiCircleCheck size={80} className="text-primary-500" />,
        className: "border-b border-b-primary-500",
      },
    }}
  >
    {(t) => (
      <ToastBar toast={t}>
        {({ icon, message }) => (
          <>
            {icon}
            {message}
            {t.type !== "loading" && (
              <button onClick={() => toast.dismiss(t.id)}>X</button>
            )}
          </>
        )}
      </ToastBar>
    )}
  </Toaster>
);
