function solution(s) {
    return [...s].filter(val => [...s].filter(v => v === val).length === 1).sort().join('')
}