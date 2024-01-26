function solution(land) {
    const rows = land.length;
    const cols = land[0].length;

    for (let i = 1; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let max = 0;
            for (let k = 0; k < cols; k++) {
                if (j !== k) {
                    max = Math.max(max, land[i - 1][k]);
                }
            }
            land[i][j] += max;
        }
    }

    return Math.max(...land[rows - 1]);
}