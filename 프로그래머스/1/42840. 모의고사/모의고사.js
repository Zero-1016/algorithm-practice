function solution(answer) {
    const patterns = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]

    const score = [0, 0, 0]

    for (let i = 0; i < answer.length; i++) {
        for (let j = 0; j < patterns.length; j++) {
            if (answer[i] === patterns[j][i % patterns[j].length]) {
                score[j]++
            }
        }
    }
    const maxScore = Math.max(...score)
    const highestScore = []
    for (let i = 0; i < score.length; i++) {
        if (score[i] === maxScore) {
            highestScore.push(i + 1)
        }
    }

    return highestScore
}