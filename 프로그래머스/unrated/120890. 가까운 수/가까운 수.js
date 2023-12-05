function solution(array, n) {
    const sort = array.sort()
    return sort[sort.findIndex(value => Math.abs(n - value) === Math.min(...sort.map(val => Math.abs(n - val))))]
}