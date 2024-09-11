import { useState } from "react";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";

export function Wordle() {
  const [attempts, setAttempts] = useState([]);
  const [currentAttempt, setCurrentAttempt] = useState("");

  const onKey = (key) => {
    setCurrentAttempt(currentAttempt + key);
  };

  return (
    <>
      <h1>Wordle</h1>
      <Grid attempts={attempts} currentAttempt={currentAttempt} />
      <Keyboard onKey={onKey} />
    </>
  );
}
