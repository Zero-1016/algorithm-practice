function solution(numbers, target) {
    let answer = 0;
    function targetNumber(array, index, value, target) {
        if (index === array.length) {
            if (target === value) answer++;
            return;
        }

        targetNumber(array, index + 1, (value + array[index]), target);
        targetNumber(array, index + 1, (value - array[index]), target);
    }

    targetNumber(numbers, 0, 0, target);
    return answer;
}