function solution(n) {
    var answer = [];
    let number = n;
    let temp = true;
    let count = 2;
    while (temp) {
        if (number % count === 0) {
            answer.push(count);
            number /= count;
            count = 2;
        } else {
            count++;
        }

        if (count === number + 1) {
            break;
        }
    }
    return [...new Set(answer)];
}
