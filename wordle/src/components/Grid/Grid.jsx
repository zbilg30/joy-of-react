import React from "react";

import { Attempt } from "../Attempt";

export function Grid({ attempts, currentAttempt }) {
  const rows = [];

  for (let i = 0; i < 6; i++) {
    if (i < attempts.length) {
      rows.push(<Attempt key={i} attempt={attempts[i]} solved={true} />);
    } else if (i === attempts.length) {
      rows.push(<Attempt key={i} attempt={currentAttempt} solved={false} />);
    } else {
      rows.push(<Attempt key={i} attempt="" solved={false} />);
    }
  }

  return <div className="grid">{rows}</div>;
}
