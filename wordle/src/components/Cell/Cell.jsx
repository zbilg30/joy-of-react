import { BLACK, GREY } from "../../constant";
import { getBgColor } from "../../utils";

export function Cell({ attempt, index, solved }) {
  let content;
  const color = getBgColor(attempt, index);
  let hasLetter = attempt[index] !== undefined;
  if (hasLetter) {
    content = attempt[index];
  } else {
    content = <div style={{ opacity: 0 }}>X</div>;
  }

  return (
    <div className={"cell " + (solved ? "solved" : "")}>
      <div
        className="surface"
        style={{
          transitionDelay: index * 300 + "ms",
        }}
      >
        <div
          className="front"
          style={{
            backgroundColor: BLACK,
            borderColor: hasLetter ? GREY : "",
          }}
        >
          {content}
        </div>
        <div
          className="back"
          style={{
            backgroundColor: color,
            borderColor: color,
          }}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
