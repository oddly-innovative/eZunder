import { useState, type ReactNode, useEffect } from "react";

type ToastProps = {
  id: string;
  title?: string;
  description?: ReactNode;
  action?: ReactNode;
  variant?: "default" | "destructive" | "success";
};

let toastId = 0;

type ToastActionType = (toast: ToastProps) => void;

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  // A function to create a new toast
  const toast: ToastActionType = (props) => {
    const id = String(toastId++);
    const newToast = { id, ...props };
    setToasts((prevToasts) => [...prevToasts, newToast]);

    return id;
  };

  // A function to dismiss a toast by id
  const dismiss = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return {
    toast,
    dismiss,
    toasts,
  };
}
