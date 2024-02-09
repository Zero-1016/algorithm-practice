function solution(N, stages) {
    const level = new Array(N).fill(0).map((v, i) => i + 1);
    const clearCount = new Array(N).fill(0);
    stages.sort((a, b) => a - b);
    
    for (let i = 1; i <= N; i++) {
        let check = 0;
        
        for (let j = 0; j < stages.length; j++) {
            if (stages[j] === i) {
                check++;
            }
        }
        
        clearCount[i - 1] = check / stages.length;
        stages = stages.filter(stage => stage !== i);
    }
    
    level.sort((a, b) => clearCount[b - 1] - clearCount[a - 1]);
    
    return level;
}