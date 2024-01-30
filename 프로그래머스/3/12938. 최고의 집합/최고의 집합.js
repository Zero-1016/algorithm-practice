function solution(n, s) {
    if (n > s) return [-1]

    let answer = [];

    while (n !== 0) {
        let a = Math.round(s / n)
        answer.push(a)
        s -= a
        n--;
    }

    return answer.sort((a, b) => a - b);
}