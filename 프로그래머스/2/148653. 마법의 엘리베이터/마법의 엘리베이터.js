function solution(storey) {
    var answer = 0;
    while (storey) {
        const one = storey % 10; 
        storey = Math.floor(storey / 10); 

        if (one > 5) {
            storey += 1;
            answer += 10 - one; 
        }
        else if (one === 5) {
            const next = storey % 10;
            if (next === 4 || next === 6) {
                storey += 1;
                answer += (next === 4 ? 6 : 4);
            } else {
                answer += 5;
            }
        }
        else {
            answer += one;
        }
    }
    return answer;
}