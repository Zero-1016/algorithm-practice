function solution(my_strings, parts) {
    var answer = '';
    my_strings.forEach((value, index) => {
        answer += value.substring(parts[index][0], parts[index][1] + 1)
    })
    return answer;
}
