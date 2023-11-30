function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach(element => {
        const check = element.substring(s, l + s)
        if (k < check) answer.push(Number(check))
    });
    return answer;
}