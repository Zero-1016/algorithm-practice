function solution(n) {
    var answer = 0;
    const arr = []
    
    arr[0] = 1
    arr[1] = 1
    
    for(let i = 0; i <= n; i++){
        if(arr[i] < 2) continue
        arr[i] = (arr[i - 1] + arr[i - 2]) %1234567
    }
    
    return arr[n];
}