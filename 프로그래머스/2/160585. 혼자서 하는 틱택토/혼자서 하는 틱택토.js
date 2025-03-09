// 게임판의 상태를 체크하는 함수들
const countMoves = (board) => {
  return board.reduce(
    (count, row) => {
      const O = (row.match(/O/g) || []).length;
      const X = (row.match(/X/g) || []).length;
      return {
        O: count.O + O,
        X: count.X + X,
      };
    },
    { O: 0, X: 0 }
  );
};

const isValidTurn = (moves) => {
  // X는 O보다 많을 수 없고, O는 X보다 1개 이상 많을 수 없음
  return moves.X === moves.O || moves.X === moves.O - 1;
};

const checkWinner = (board) => {
  const lines = [
    // 가로
    ...board,
    // 세로
    [0, 1, 2].map((col) => board.map((row) => row[col]).join("")),
    // 대각선
    [board[0][0] + board[1][1] + board[2][2]],
    [board[0][2] + board[1][1] + board[2][0]],
  ].flat();

  const winner = {
    O: lines.some((line) => line === "OOO"),
    X: lines.some((line) => line === "XXX"),
  };

  // 둘 다 이기는 경우는 불가능
  if (winner.O && winner.X) return false;
  if (winner.O) return "O";
  if (winner.X) return "X";
  return null;
};

function solution(board) {
  // 1. 수의 개수 확인
  const moves = countMoves(board);
  if (!isValidTurn(moves)) return 0;

  // 2. 승자 확인
  const winner = checkWinner(board);
  if (winner === false) return 0; // 잘못된 게임 상태

  if (winner === "O" && moves.O !== moves.X + 1) return 0;
  if (winner === "X" && moves.O !== moves.X) return 0;

  // 4. 승자가 없는 경우, 게임이 진행 중이거나 무승부
  return 1;
}