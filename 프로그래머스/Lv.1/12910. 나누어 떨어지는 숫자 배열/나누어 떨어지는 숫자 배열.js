function solution(arr, divisor) {
    var answer = [];

    arr.forEach(element => {
        if (element % divisor === 0) answer.push(element)
    });

    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}