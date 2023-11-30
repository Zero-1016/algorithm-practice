function solution(my_string) {
    var answer = [];
    my_string.split("").forEach((value, index) => {
        answer.push(my_string.substring(index, my_string.length))
    })
    return answer.sort();
}