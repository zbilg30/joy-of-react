import { GREY } from "../../constant";

export function Button({ buttonKey, children, onKey }) {
  return (
    <button
      style={{
        background: GREY,
      }}
      className="button"
      onClick={() => {
        onKey(buttonKey);
      }}
    >
      {children}
    </button>
  );
}
