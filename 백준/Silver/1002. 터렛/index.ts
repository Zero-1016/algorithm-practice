import { multiLineNumberArrayInput } from "../../utils/input";

const [_, ...lines] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (const line of lines) {
  const [x1, y1, r1, x2, y2, r2] = line;

  // 두 원의 중심 거리의 제곱 (d^2)
  const distSq = (x2 - x1) ** 2 + (y2 - y1) ** 2;

  // 반지름의 합의 제곱 (r1 + r2)^2
  const sumRefSq = (r1 + r2) ** 2;

  // 반지름의 차의 제곱 (r1 - r2)^2
  const diffRefSq = (r1 - r2) ** 2;

  if (distSq === 0 && r1 === r2) {
    // 1. 두 원이 완전히 겹칠 때 (무한대의 접점)
    console.log(-1);
  } else if (distSq === sumRefSq || distSq === diffRefSq) {
    // 2. 외접하거나 내접할 때 (접점 1개)
    console.log(1);
  } else if (distSq > diffRefSq && distSq < sumRefSq) {
    // 3. 두 원이 두 점에서 만날 때 (접점 2개)
    console.log(2);
  } else {
    // 4. 만나지 않을 때 (접점 0개)
    // - 너무 멀리 있거나, 하나가 다른 하나 안에 쏙 들어가 있거나
    console.log(0);
  }
}
