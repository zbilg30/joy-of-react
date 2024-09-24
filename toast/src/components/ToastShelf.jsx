import { useToast } from "../context/ToastContext";

export const ToastShelf = () => {
  const { toasts, removeToast } = useToast();
  return (
    <div className={`toast-shelf ${toasts.length === 0 && "hidden"}`}>
      {toasts.map((toast) => (
        <div
          key={toast.id}
          onClick={() => removeToast(toast.id)}
          className={`toast ${toast.variant}`}
        >
          {toast.message}
        </div>
      ))}
    </div>
  );
};
