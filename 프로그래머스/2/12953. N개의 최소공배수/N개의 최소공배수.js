
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
function solution(arr) {
    arr.sort();
    let LCM = arr[0]

    for (let i = 1; i < arr.length; i++) {
        LCM = getLCM(LCM, arr[i])
    }
    return LCM
}