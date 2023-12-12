function solution(n, a, b) {
    var answer = 0;
    let users = new Array(n).fill('').map((v, i) => {
        if (i === a - 1 | i === b - 1) {
            return 1
        }
        return 0
    })

    while (true) {
        if (users.includes(2)) {
            break;
        }
        let winner = []
        let count = 0;
        while (count < users.length / 2) {
            if (users[count * 2] + users[count * 2 + 1] === 2) {
                winner.push(users[count * 2] + users[count * 2 + 1])
                break;
            } else {
                winner.push(users[count * 2] + users[count * 2 + 1])
            }
            count++;
        }
        users = winner
        answer++
    }
    return answer;
}