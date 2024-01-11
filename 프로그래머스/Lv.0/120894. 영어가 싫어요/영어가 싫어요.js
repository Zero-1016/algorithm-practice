let eng = [
    { name: "zero", value: 0 },
    { name: "one", value: 1 },
    { name: "two", value: 2 },
    { name: "three", value: 3 },
    { name: "four", value: 4 },
    { name: "five", value: 5 },
    { name: "six", value: 6 },
    { name: "seven", value: 7 },
    { name: "eight", value: 8 },
    { name: "nine", value: 9 }
]


function solution(numbers) {
    while (true) {
        prev = String(numbers).length
        eng.forEach((value) => {
            numbers = numbers.replace(value.name, value.value)
        })
        next = String(numbers).length

        if (prev === next) break
    }
    return Number(numbers);
}