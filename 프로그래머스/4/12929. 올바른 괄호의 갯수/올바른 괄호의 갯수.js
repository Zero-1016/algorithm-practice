function solution(n) {
    var answer = 0;

    function dfs(open, close) {
        if (open === n) {
            return 1
        }

        if (close > open) {
            return 0
        }

        let number = 0;
        number += dfs(open + 1, close);
        number += dfs(open, close + 1);
        return number
    }

    answer = dfs(1, 0)

    return answer;
}