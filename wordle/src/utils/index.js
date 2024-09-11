import { GREEN, GREY, YELLOW, secret } from "../constant";

export function getBgColor(attempt, i) {
  let correctLetter = secret[i];
  let attemptLetter = attempt[i];
  if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) {
    return GREY;
  }
  if (correctLetter === attemptLetter) {
    return GREEN;
  }
  return YELLOW;
}
