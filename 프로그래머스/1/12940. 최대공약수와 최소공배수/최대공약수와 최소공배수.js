const getGCD = (max, min) => {
    while (min !== 0) {
        let remain = max % min
        max = min;
        min = remain;
    }
    return max
}

const getLCM = (a, b) => {
    return a * b / getGCD(a, b)
}
function solution(num1, num2) {
    let LCM = getLCM(Math.max(num1, num2), Math.min(num1, num2))
    let GCD = getGCD(Math.max(num1, num2), Math.min(num1, num2))
    return [GCD, LCM]
}