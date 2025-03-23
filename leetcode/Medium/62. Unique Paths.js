/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const pathMap = new Array(m).fill([]).map(v => new Array(n).fill('').map(()=>1))
    for (let i = 1; i < m; i++){
        for (let j = 1; j < n; j++){
            pathMap[i][j] = pathMap[i - 1][j] + pathMap[i][j - 1]
        }
    }

    return pathMap[m-1][n-1]
};
