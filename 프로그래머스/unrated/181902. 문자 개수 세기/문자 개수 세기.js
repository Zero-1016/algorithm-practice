function solution(my_string) {
    var answer = new Array(52).fill('').map((v) => 0)

    my_string.split('').forEach(element => {
        if (element.charCodeAt() < 97) {
            answer[element.charCodeAt() - 65] = answer[element.charCodeAt() - 65] + 1
        } else {
            answer[element.charCodeAt() - 71] = answer[element.charCodeAt() - 71] + 1
        }
    });

    return answer;
}