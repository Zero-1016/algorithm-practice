function solution(absolutes, signs) {
    var answer = 0;
    absolutes.forEach((val, ind) => {
        switch(signs[ind]){
            case true:
                answer += absolutes[ind]
                break
            case false:
                answer -= absolutes[ind]
                
        }
    })
    return answer;
}