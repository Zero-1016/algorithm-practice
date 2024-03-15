function solution(n, wires) {
    // 그래프 초기화
    const graph = Array.from({ length: n + 1 }, () => []);
    wires.forEach(([a, b]) => {
        graph[a].push(b);
        graph[b].push(a);
    });

    let answer = Number.MAX_SAFE_INTEGER;

    // 모든 전선을 순회하면서 해당 전선을 끊었을 때의 차이 계산
    wires.forEach(([a, b]) => {
        let visited = new Array(n + 1).fill(false);

        // 전선 끊기
        graph[a] = graph[a].filter(node => node !== b);
        graph[b] = graph[b].filter(node => node !== a);

        // 한 쪽 전력망의 송전탑 개수 계산
        let count = dfs(graph, visited, a, 0);

        // 전선 다시 연결하기
        graph[a].push(b);
        graph[b].push(a);

        // 두 전력망의 차이 계산
        let diff = Math.abs(n - 2 * count);
        if (diff < answer) {
            answer = diff;
        }
    });

    return answer;
}

// 깊이 우선 탐색을 이용하여 송전탑 개수 계산
function dfs(graph, visited, node, count) {
    visited[node] = true;
    count += 1;
    for (let next of graph[node]) {
        if (!visited[next]) {
            count = dfs(graph, visited, next, count);
        }
    }
    return count;
}

