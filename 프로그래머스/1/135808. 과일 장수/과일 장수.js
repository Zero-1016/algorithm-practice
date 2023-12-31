function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => a - b);

    if(score.length < m) return 0 

    while(true){
        if(score.length < m) break
        const box = []
        for(let i = 0; i < m; i++){
            box.push(score.pop())
        }
        answer += Math.min(...box) * m
    }
    return answer;
}