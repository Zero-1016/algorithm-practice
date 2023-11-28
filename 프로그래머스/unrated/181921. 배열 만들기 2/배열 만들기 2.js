function solution(l, r) {
    var answer = [];
    let not = [1, 2, 3, 4, 6, 7, 8, 9]
    for (let i = l; i <= r; i++) {
        if (String(i).split('').filter(v => not.includes(Number(v))).length === 0) answer.push(i)
    }
    return answer.length !== 0 ? answer : [-1];
}