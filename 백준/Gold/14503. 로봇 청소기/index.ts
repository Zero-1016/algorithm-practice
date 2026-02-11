const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);
const board = [];

for (let i = 0; i < N; i++) {
  board.push(input[i + 2].split(" ").map(Number));
}

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

let cleanedCount = 0;

while (true) {
  if (board[r][c] === 0) {
    board[r][c] = 2; // 청소 완료 표시를 2로 함
    cleanedCount++;
  }

  let foundDirty = false;
  for (let i = 0; i < 4; i++) {
    let nr = r + dr[i];
    let nc = c + dc[i];

    if (nr >= 0 && nr < N && nc >= 0 && nc < M) {
      if (board[nr][nc] === 0) {
        foundDirty = true;
        break;
      }
    }
  }

  if (!foundDirty) {
    let backDir = (d + 2) % 4;
    let br = r + dr[backDir];
    let bc = c + dc[backDir];

    if (br >= 0 && br < N && bc >= 0 && bc < M && board[br][bc] !== 1) {
      r = br;
      c = bc;
    } else {
      break;
    }
  } else {
    d = (d + 3) % 4;

    let nr = r + dr[d];
    let nc = c + dc[d];

    if (nr >= 0 && nr < N && nc >= 0 && nc < M && board[nr][nc] === 0) {
      r = nr;
      c = nc;
    }
  }
}

console.log(cleanedCount);
