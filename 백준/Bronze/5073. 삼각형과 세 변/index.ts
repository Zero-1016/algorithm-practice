import { multiLineNumberArrayInput } from "../../utils/input";

const lines = multiLineNumberArrayInput();

for (let line of lines) {
  const [a, b, c] = [...line].sort((x, y) => x - y);

  if (a === 0 && b === 0 && c === 0) break;

  if (c >= a + b) {
    console.log("Invalid");
    continue;
  }

  if (a === b && b === c) {
    console.log("Equilateral");
  } else if (a === b || b === c || a === c) {
    console.log("Isosceles");
  } else {
    console.log("Scalene");
  }
}
