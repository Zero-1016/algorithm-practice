import { oneLineNumberInput } from "../../utils/input";

const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let count = 1;
let floor = 1;

while (count < n) {
  count += floor * 6;

  floor++;
}

console.log(floor);
