import { multiLineNumberArrayInput } from "../../utils/input";

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [itemListLength, maxWeight] = input[0].split(" ").map(Number);
const itemList = input.slice(1).map((el) => el.split(" ").map(Number));

const dp = new Array(maxWeight + 1).fill(0);

for (let i = 0; i < itemListLength; i++) {
  const [itemWeight, itemValue] = itemList[i];

  for (let w = maxWeight; w >= itemWeight; w--) {
    dp[w] = Math.max(dp[w], dp[w - itemWeight] + itemValue);
  }
}

console.log(dp[maxWeight]);
