const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  let base = a % 10;
  if (base === 0) {
    console.log(10);
    continue;
  }

  const power = ((b - 1) % 4) + 1;

  const result = Math.pow(base, power) % 10;

  console.log(result === 0 ? 10 : result);
}
