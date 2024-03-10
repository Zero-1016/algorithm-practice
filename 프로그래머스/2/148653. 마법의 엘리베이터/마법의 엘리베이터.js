function solution(storey) {
    var answer = 0;
    while (storey) {
        const one = storey % 10;
        storey = Math.floor(storey / 10);
        if (one === 0) {
            continue
        }
        else if (one > 5) {
            storey += 1
            answer += 10 - one
        }
        else if (one === 5) {
            if (Math.round(storey % 10 / 10) === 1) {
                storey += 1
                answer += 5
            } else {
                answer += 5
            }
        }
        else {
            answer += one
        }
    }
    return answer;
}