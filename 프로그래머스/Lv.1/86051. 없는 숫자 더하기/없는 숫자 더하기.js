function solution(numbers) {
    var answer = [];

    Array(9).fill('').forEach((_, ind) => {
        if (!numbers.includes(ind + 1)) answer.push(ind + 1)
    });

    return answer.reduce((a, b) => a + b, 0);
}