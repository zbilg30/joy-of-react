import { useState, useEffect, useRef } from "react";
import { Grid } from "../Grid";
import { Keyboard } from "../Keyboard";
import { secret } from "../../constant";

export function Wordle() {
  const [attempts, setAttempts] = useState([]);
  const [currentAttempt, setCurrentAttempt] = useState("");
  const animatingRef = useRef(false);

  const onKey = (key) => {
    const letter = key.toLowerCase();

    if (attempts.length === 6) {
      return;
    }

    if (animatingRef.current === true) {
      return;
    }

    if (key === "Enter") {
      if (currentAttempt.length < 5) return;

      const tmp = [...attempts];
      tmp.push(currentAttempt);

      setAttempts(tmp);
      setCurrentAttempt("");
      waitForAnimation(currentAttempt);
    } else if (key === "Backspace") {
      setCurrentAttempt(currentAttempt.slice(0, -1));
    } else if (/^[a-z]$/.test(letter)) {
      setCurrentAttempt(currentAttempt + letter);
    }
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey) {
      return;
    }
    onKey(e.key);
  };

  const waitForAnimation = (attempt) => {
    animatingRef.current = true;
    setTimeout(() => {
      if (attempt === secret) {
        alert("You win");
      }
      animatingRef.current = false;
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <h1>Wordle</h1>
      <Grid attempts={attempts} currentAttempt={currentAttempt} />
      <Keyboard onKey={onKey} />
    </>
  );
}
