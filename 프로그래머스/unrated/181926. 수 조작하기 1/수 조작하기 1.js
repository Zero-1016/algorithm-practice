function solution(n, control) {
    var answer = n;
    control.split("").forEach(value => {
        switch(value){
            case "w" :
                answer += 1
                return
            case "s":
                answer -= 1
                return
            case "d":
                answer += 10
                return
            case "a":
                answer -= 10
                return
        }
    })
    return answer;
}