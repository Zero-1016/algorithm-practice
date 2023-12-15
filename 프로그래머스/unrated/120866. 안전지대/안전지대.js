function solution(board) {
    let changeBoard = JSON.parse(JSON.stringify(board))
    board.forEach((el, y) => {
        el.forEach((le, x) => {
            if (le === 1) {
                // 위
                if (y !== 0) {
                    changeBoard[y - 1][x] = 1
                    if (x !== 0) {
                        changeBoard[y - 1][x - 1] = 1
                    }
                    if (x !== el.length - 1) {
                        changeBoard[y - 1][x + 1] = 1
                    }
                }
                // 중간
                if (x !== 0) {
                    changeBoard[y][x - 1] = 1
                }
                if (x !== el.length - 1) {
                    changeBoard[y][x + 1] = 1
                }
                // 아래
                if (y !== changeBoard.length - 1) {
                    changeBoard[y + 1][x] = 1
                    if (x !== 0) {
                        changeBoard[y + 1][x - 1] = 1
                    }
                    if (x !== el.length - 1) {
                        changeBoard[y + 1][x + 1] = 1
                    }
                }
            }
        })
    });
    return changeBoard.flat().filter(v => v !== 1).length;
}