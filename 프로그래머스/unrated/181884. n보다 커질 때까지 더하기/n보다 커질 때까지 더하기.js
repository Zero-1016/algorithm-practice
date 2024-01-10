function solution(numbers, n) {
    var answer = 0;
    let count = 0;
    while(answer <= n){
        answer += numbers[count++]
    }
    return answer;
}