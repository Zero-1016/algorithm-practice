const [text, textIndex] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(text[textIndex - 1]);
