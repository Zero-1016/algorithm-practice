function solution(array) {
    let max = Math.max(...array)
    let index = array.findIndex(val => val == max)
    return [max, index];
}