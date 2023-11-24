function solution(code) {
    var answer = code.split("");
    let temp = 0;
    let result = ""
    answer.forEach((value, index) => {
        if (value == "1") return temp = temp === 1 ? 0 : 1;

        if (index % 2 === temp) {
            result += value
        }
    })
    return result === "" ? "EMPTY" : result;
}