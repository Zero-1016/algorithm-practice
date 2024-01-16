function solution(input) {
    var answer = [];
    let visited = new Array(input.length).fill(false)

    function dfs(visited, tickets, node, first = false) {
        const copy = [...visited]
        const array = [...tickets]
        copy[node] = true

        if (!first) {
            array.push(input[node][1])
        }

        if (visited.length + 1 === array.length) {
            answer.push(array)
        }

        visited.forEach((val, idx) => {
            if (!val && array[array.length - 1] === input[idx][0]) dfs(copy, array, idx)
        })
    }

    input.forEach((val, idx) => {
        if (val[0] === "ICN") dfs(visited, val, idx, true)
    });

    answer.sort((a, b) => a.join().localeCompare(b.join()));

    return answer[0];
}