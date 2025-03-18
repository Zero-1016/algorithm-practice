/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let top = 0;
    let bottom = matrix.length - 1;

    while(top < bottom) {
        for (let col = 0; col < matrix.length; col++){
            let temp = matrix[top][col]
            matrix[top][col] = matrix[bottom][col]
            matrix[bottom][col] = temp
        }
        top++
        bottom--
    }

    for (let row = 0; row < matrix.length; row++){
        for (let col = row + 1; col< matrix.length; col++){
            let temp = matrix[row][col]
            matrix[row][col] = matrix[col][row]
            matrix[col][row] = temp
        }
    }

    return matrix
};
