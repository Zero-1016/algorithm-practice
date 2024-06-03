function solution(n, computers) {
    const visited = new Array(n).fill(0);
    let answer = 0;

    function dfs(visited, node) {
        visited[node] = 1;
        for (let i = 0; i < computers[node].length; i++) {
            if (computers[node][i] === 1 && visited[i] === 0) {
                dfs(visited, i);
            }
        }
    }

    computers.forEach((_, i) => {
        if (visited[i] === 1) return;

        answer += 1;
        dfs(visited, i);
    });

    return answer;
}