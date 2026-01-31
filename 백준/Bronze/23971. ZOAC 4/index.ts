const [H, W, N, M] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const row = Math.ceil(H / (N + 1));
const column = Math.ceil(W / (M + 1));

console.log(row * column);
