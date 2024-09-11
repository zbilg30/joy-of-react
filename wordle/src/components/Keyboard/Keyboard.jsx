import { KeyboardRow } from "../KeyboardRow";

export function Keyboard({ onKey }) {
  return (
    <div id="keyboard">
      <KeyboardRow onKey={onKey} letters="qwertyuiop" isLast={false} />
      <KeyboardRow onKey={onKey} letters="asdfghjkl" isLast={false} />
      <KeyboardRow onKey={onKey} letters="zxcvbnm" isLast={true} />
    </div>
  );
}
