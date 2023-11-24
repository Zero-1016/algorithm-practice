function solution(control) {
    var answer = "";
    control.forEach((_, index, arr) => {
        switch (arr[index] - arr[index + 1]) {
            case -1:
                answer += "w"
                return
            case 1:
                answer += "s"
                return
            case -10:
                answer += "d"
                return
            case 10:
                answer += "a"
                return
        }
    })
    return answer;
}