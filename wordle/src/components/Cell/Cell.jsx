import { getBgColor } from "../../utils";

export function Cell({ attempt, index }) {
  let content;
  const color = getBgColor(attempt, index);
  let hasLetter = attempt[index] !== undefined;
  if (hasLetter) {
    content = attempt[index];
  } else {
    content = <div style={{ opacity: 0 }}>X</div>;
  }

  return (
    <div
      className="cell"
      style={{
        backgroundColor: color,
        borderColor: color,
      }}
    >
      {content}
    </div>
  );
}
