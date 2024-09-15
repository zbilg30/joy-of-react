import { Cell } from "../Cell";

export function Attempt({ attempt, solved }) {
  const cells = [];
  for (let i = 0; i < 5; i++) {
    cells.push(
      <Cell key={Math.random()} attempt={attempt} index={i} solved={solved} />
    );
  }

  return <div>{cells}</div>;
}
