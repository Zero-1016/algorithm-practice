const check = (board, x, y) => {
  const point = board[x][y];
  if (!point) return false;

  return (
    point === board[x + 1][y] &&
    point === board[x][y + 1] &&
    point === board[x + 1][y + 1]
  );
};

function solution(m, n, board) {
  let gameBoard = board.map((row) => row.split(""));

  while (true) {
    const deleteSet = new Set();

    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        const current = gameBoard[i][j];
        if (
          current &&
          current === gameBoard[i][j + 1] &&
          current === gameBoard[i + 1][j] &&
          current === gameBoard[i + 1][j + 1]
        ) {
          deleteSet.add(`${i},${j}`);
          deleteSet.add(`${i},${j + 1}`);
          deleteSet.add(`${i + 1},${j}`);
          deleteSet.add(`${i + 1},${j + 1}`);
        }
      }
    }

    if (deleteSet.size === 0) break;

    deleteSet.forEach((pos) => {
      const [i, j] = pos.split(",").map(Number);
      gameBoard[i][j] = 0;
    });

    for (let j = 0; j < n; j++) {
      for (let i = m - 1; i >= 0; i--) {
        if (!gameBoard[i][j]) {
          for (let k = i - 1; k >= 0; k--) {
            if (gameBoard[k][j]) {
              gameBoard[i][j] = gameBoard[k][j];
              gameBoard[k][j] = 0;
              break;
            }
          }
        }
      }
    }
  }

  let totalDeleted = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!gameBoard[i][j]) totalDeleted++;
    }
  }

  return totalDeleted;
}