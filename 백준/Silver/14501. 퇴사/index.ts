import { multiLineNumberArrayInput } from "../../utils/input";

const state = multiLineNumberArrayInput();

const [days, ...schedule] = state;
const maxDay = days[0];

const dp: number[] = Array.from({ length: maxDay + 1 }, () => 0);

for (let i = maxDay - 1; i >= 0; i--) {
  const [time, value] = schedule[i];

  if (i + time <= maxDay) {
    dp[i] = Math.max(dp[i + time] + value, dp[i + 1]);
  } else {
    dp[i] = dp[i + 1];
  }
}

console.log(dp[0]);
