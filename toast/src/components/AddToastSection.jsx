import { useState } from "react";
import { useToast } from "../context/ToastContext";

export const AddToastSection = () => {
  const [input, setInput] = useState("");
  const [type, setType] = useState("success");
  const { addToast } = useToast();

  const onAddToast = () => {
    addToast({ message: input, variant: type });
    setInput("");
    setType("");
  };

  const onTypeChange = (value) => {
    setType(value);
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <label style={{ color: "white" }}>
        <input
          type="checkbox"
          checked={type === "success"}
          onChange={() => onTypeChange("success")}
        />
        Success
      </label>
      <label style={{ color: "white" }}>
        <input
          type="checkbox"
          checked={type === "error"}
          onChange={() => onTypeChange("error")}
        />
        Error
      </label>
      <button onClick={() => onAddToast()}>Add Toast</button>
    </>
  );
};
