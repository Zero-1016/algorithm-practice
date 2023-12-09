function get_measure_count_total(number) {
    let count = 0;
    for (let i = 1; i <= number; i++) {
        let decimalCount = 0;
        for (let j = 1; j <= number; j++) {
            if (i * j === number) {
                decimalCount += 1;
            }
        }
        if (decimalCount == 1) {
            count++;
        }
    }
    return count;
}

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        const result = get_measure_count_total(i);
        result % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}
