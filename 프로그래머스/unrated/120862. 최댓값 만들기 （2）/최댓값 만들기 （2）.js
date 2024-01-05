
function solution(numbers) {
    let max = numbers[0] * numbers[1]
    for (let i = 0; i < numbers.length; i++) {
        const firstNumber = numbers[i];

        const omitArray = numbers.filter((val, ind) => ind !== i);
        for (let j = 0; j < omitArray.length; j++) {
            const secondNumber = omitArray[j]
            if (firstNumber * secondNumber > max) {
                max = firstNumber * secondNumber
            }
        }
    }
    return max;
}

