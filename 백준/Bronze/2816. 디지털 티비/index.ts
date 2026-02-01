import {
  multiLineNumberArrayInput,
  multiLineStringInput,
} from "../../utils/input";

const [_, ...channels] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let cursor = 0;
let result = "";

let kbs1Idx = channels.indexOf("KBS1");
while (cursor < kbs1Idx) {
  result += "1";
  cursor++;
}
while (cursor > 0) {
  result += "4";
  [channels[cursor], channels[cursor - 1]] = [
    channels[cursor - 1],
    channels[cursor],
  ];
  cursor--;
}

let kbs2Idx = channels.indexOf("KBS2");
while (cursor < kbs2Idx) {
  result += "1";
  cursor++;
}
while (cursor > 1) {
  result += "4";
  [channels[cursor], channels[cursor - 1]] = [
    channels[cursor - 1],
    channels[cursor],
  ];
  cursor--;
}

console.log(result);
