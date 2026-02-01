import { oneLineStringInput } from "../../utils/input";

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const upperText = input.toUpperCase();

const counts = {};
let maxCount = 0;
let maxChar = "";
let isTie = false;

for (const char of upperText) {
  counts[char] = (counts[char] || 0) + 1;

  if (counts[char] > maxCount) {
    maxCount = counts[char];
    maxChar = char;
    isTie = false;
  } else if (counts[char] === maxCount && char !== maxChar) {
    isTie = true;
  }
}

console.log(isTie ? "?" : maxChar);
