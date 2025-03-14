/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 2; j++){
            let Wcount = 0
            let Bcount = 0
            grid[i][j] === 'W' ? Wcount++ : Bcount++;
            grid[i + 1][j] === 'W' ? Wcount++ : Bcount++; 
            grid[i][j + 1] === 'W' ? Wcount++ : Bcount++; 
            grid[i + 1][j + 1] === 'W' ? Wcount++ : Bcount++; 
            
            if(Wcount >= 3 || Bcount >= 3) return true
        }
    }

    return false
};
