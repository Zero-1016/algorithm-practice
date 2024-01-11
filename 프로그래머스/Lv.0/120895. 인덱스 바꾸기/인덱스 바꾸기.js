function solution(my_string, num1, num2) {
    var answer = [...my_string];
    let prev = answer[num1]
    answer[num1] = answer[num2]
    answer[num2] = prev
    return answer.join('');
}