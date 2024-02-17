function solution(gems) {
    const type = new Set(gems).size;
    const map = new Map();
    let start = 0;
    let end = 0;

    map.set(gems[0], 1);
    let answer = [0, gems.length - 1]; 

    while (start < gems.length && end < gems.length) {
        if (map.size === type) { 
            if (end - start < answer[1] - answer[0]) {
                answer = [start, end]; 
            }
            if (map.get(gems[start]) === 1) {
                map.delete(gems[start]);
            } else {
                map.set(gems[start], map.get(gems[start]) - 1);
            }
            start++;
        } else { 
            end++;
            map.set(gems[end], (map.get(gems[end]) || 0) + 1);
        }
    }

    return [answer[0] + 1, answer[1] + 1]; 
}
