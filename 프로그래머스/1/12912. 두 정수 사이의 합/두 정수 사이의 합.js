function solution(a, b) {
    var answer = 0;
    if (a === b) return a
    const MAX = Math.max(a, b);
    const MIN = Math.min(a, b);
    for(let i = MIN; i <= MAX; i++){
        answer += i
    }
    return answer;
}