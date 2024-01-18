function solution(arr1, arr2) {
    if(arr1.length !== arr2.length) return  arr1.length > arr2.length ? 1 : -1;
    
    const a = arr1.reduce((a, b)=> a+b)
    const b = arr2.reduce((a, b)=> a+b)
    if(a == b) return 0
    return a > b ? 1 : -1;
}