function solution(numbers) {
    var answer = [];
    numbers.forEach((val, ind) => {
        for (let i = ind + 1; i < numbers.length; i++) {
            answer.push(val + numbers[i]);
        }
    });
    return [...new Set(answer)].sort((a, b)=> a - b)
}