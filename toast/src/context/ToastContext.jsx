import { createContext, useContext, useEffect, useState } from "react";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = ({ message, variant }) => {
    setToasts([...toasts, { message, variant }]);
  };
  useEffect(() => {
    if (toasts.length > 0) {
      setTimeout(() => {
        const tmp = [...toasts];
        tmp.shift();
        setToasts(tmp);
      }, 1000);
    }
  }, [toasts]);
  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
