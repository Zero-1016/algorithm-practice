function solution(storage, requests) {
  const n = storage.length;
  const m = storage[0].length;
  let grid = storage.map((row) => row.split(""));
  let isEmpty = Array.from({ length: n }, () => Array(m).fill(false));

  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  function getOutsideMap() {
    const visited = Array.from({ length: n + 2 }, () => Array(m + 2).fill(false));
    const queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length > 0) {
      const [r, c] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const nr = r + dr[i];
        const nc = c + dc[i];

        if (nr >= 0 && nr < n + 2 && nc >= 0 && nc < m + 2 && !visited[nr][nc]) {
          let canPass = false;
          if (nr === 0 || nr === n + 1 || nc === 0 || nc === m + 1) {
            canPass = true;
          } else if (isEmpty[nr - 1][nc - 1]) {
            canPass = true;
          }

          if (canPass) {
            visited[nr][nc] = true;
            queue.push([nr, nc]);
          }
        }
      }
    }
    return visited;
  }

  for (const request of requests) {
    const char = request[0];
    const isCrane = request.length === 2;
    const toRemove = [];

    if (isCrane) {
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
          if (!isEmpty[r][c] && grid[r][c] === char) {
            toRemove.push([r, c]);
          }
        }
      }
    } else {
      const outsideMap = getOutsideMap();
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < m; c++) {
          if (!isEmpty[r][c] && grid[r][c] === char) {
            const isAccessible =
              outsideMap[r][c + 1] ||
              outsideMap[r + 2][c + 1] ||
              outsideMap[r + 1][c] ||
              outsideMap[r + 1][c + 2];

            if (isAccessible) toRemove.push([r, c]);
          }
        }
      }
    }

    for (const [r, c] of toRemove) {
      isEmpty[r][c] = true;
    }
  }

  let count = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (!isEmpty[r][c]) count++;
    }
  }

  return count;
}