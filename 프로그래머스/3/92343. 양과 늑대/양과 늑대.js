function solution(info, edges) {
    let answer = 0;
    
    const tree = Array.from({ length: info.length }, () => []);
    edges.forEach(([parent, child]) => {
        tree[parent].push(child);
    });

    const dfs = (sheep, wolf, canVisit) => {
        if (sheep <= wolf) return; 
        answer = Math.max(answer, sheep);

        for (let i = 0; i < canVisit.length; i++) {
            const next = canVisit[i];

            const nextVisit = [...canVisit];
            nextVisit.splice(i, 1);
            nextVisit.push(...tree[next]); 

            if (info[next] === 0) {
                dfs(sheep + 1, wolf, nextVisit);
            } else {
                dfs(sheep, wolf + 1, nextVisit);
            }
        }
    };

    dfs(1, 0, tree[0]);

    return answer;
}
