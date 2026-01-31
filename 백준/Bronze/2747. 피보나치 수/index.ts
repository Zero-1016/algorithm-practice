import { oneLineNumberInput } from "../../utils/input";

const number = require("fs").readFileSync("/dev/stdin").toString().trim();

const dp = new Array(number).fill("").map(() => 0);

dp[1] = 1;

for (let i = 2; i <= number; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(dp[number]);
