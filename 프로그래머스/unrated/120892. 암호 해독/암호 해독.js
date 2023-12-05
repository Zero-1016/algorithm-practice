function solution(cipher, code) {
    var answer = '';
    cipher.split('').forEach((element, index) => {
        if ((index + 1) % code === 0) {
            answer += element
        }
    });
    return answer;
}
