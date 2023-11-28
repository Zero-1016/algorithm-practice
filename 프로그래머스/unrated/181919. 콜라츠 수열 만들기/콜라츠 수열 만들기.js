function solution(n) {
    var answer = [];
    let number = n;
    while (true) {
        answer.push(number)


        if (number === 1) break

        if (number % 2 == 0) {
            number = number / 2;
        } else {
            number = 3 * number + 1;
        }
    }
    return answer;
}