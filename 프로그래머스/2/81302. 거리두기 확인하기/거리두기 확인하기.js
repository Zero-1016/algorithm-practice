function solution(places) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];
  const diagonals = [
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];
  const twos = [
    [0, 2], [0, -2], [2, 0], [-2, 0]
  ];

  function isSafe(place, x, y) {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        if (place[nx][ny] === 'P') {
          return false;
        }
      }
    }

    for (const [dx1, dy1] of diagonals) {
      const nx = x + dx1;
      const ny = y + dy1;
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        if (place[nx][ny] === 'P') {
          // 사이에 파티션이 없으면 거리두기 위반
          if (!(place[x][ny] === 'X' && place[nx][y] === 'X')) {
            return false;
          }
        }
      }
    }

    for (const [dx2, dy2] of twos) {
      const nx = x + dx2;
      const ny = y + dy2;
      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
        if (place[nx][ny] === 'P') {
          const mx = x + dx2 / 2;
          const my = y + dy2 / 2;
          if (place[mx][my] !== 'X') {
            return false;
          }
        }
      }
    }

    return true;
  }

  return places.map(place => {
    const map = place.map(row => row.split(''));
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (map[i][j] === 'P') {
          if (!isSafe(map, i, j)) {
            return 0;
          }
        }
      }
    }
    return 1;
  });
}
