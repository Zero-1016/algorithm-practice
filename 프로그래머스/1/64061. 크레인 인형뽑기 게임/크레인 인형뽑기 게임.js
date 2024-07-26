function solution(board, moves) {
    let answer = 0;
    const row = board[0].length
    const col = board.length
    const bucket = []

    const lanes = Array.from({length: row}, () => [])

    for (let i = col - 1; i >= 0; i--) {
        for (let j = 0; j < row; j++) {
            if (board[i][j]) {
                lanes[j].push(board[i][j])
            }
        }
    }

    for (let i = 0; i < moves.length; i++) {
        const item = lanes[moves[i] - 1].pop()
        if (!item){
            continue
        }
        if (bucket.length > 0 && bucket.at(-1) === item) {
            bucket.pop()
            answer += 2
            while (bucket.length > 1 && bucket.at(-1) === bucket.at(-2)) {
                bucket.pop()
                bucket.pop()
                answer += 2
            }
        } else {
            bucket.push(item)
        }
    }

    return answer;
}