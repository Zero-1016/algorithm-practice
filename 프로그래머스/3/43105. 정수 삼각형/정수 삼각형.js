function solution(triangle) {
    const copyTriangle = triangle.map(row => [...row]);

    for (let i = copyTriangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < copyTriangle[i].length; j++) {
            copyTriangle[i][j] += Math.max(copyTriangle[i + 1][j], copyTriangle[i + 1][j + 1]);
        }
    }

    return copyTriangle[0][0];
}