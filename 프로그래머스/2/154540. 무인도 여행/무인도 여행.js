function solution(maps) {
    var answer = [];
    const rowLength = maps.length;
    const colLength = maps[0].length;
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const visited = new Set();

    function bfs(row, col) {
        if (
            col === -1 ||
            row === -1 ||
            col >= colLength ||
            row >= rowLength ||
            maps[row][col] === 'X' ||
            visited.has(`${row} ${col}`)
        )
            return 0;

        visited.add(`${row} ${col}`);

        let sum = Number(maps[row][col]);

        for (let i = 0; i < dx.length; i++) {
            sum += bfs(row + dx[i], col + dy[i]);
        }
        return sum;
    }

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            const result = bfs(i, j);
            if (result !== 0) {
                answer.push(result);
            }
        }
    }

    if (answer.length === 0) return [-1];

    return answer.sort((a, b) => a - b);
}