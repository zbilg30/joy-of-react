import React from "react";

import { Attempt } from "../Attempt";

export function Grid({ attempts, currentAttempt }) {
  const rows = [];

  for (let i = 0; i < 6; i++) {
    rows.push(<Attempt key={Math.random()} attempt={attempts[i] || ""} />);
  }

  return <div className="grid">{rows}</div>;
}
