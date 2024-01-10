function solution(arr) {
    let firstIndex = arr.findIndex(val => val === 2)
    
    let secondIndex = arr.length - [...arr].reverse().findIndex(val => val === 2)
    
    if(firstIndex === -1) return [-1]
    
    if(secondIndex === firstIndex) return [2]

    return arr.splice(firstIndex, secondIndex - firstIndex)
}