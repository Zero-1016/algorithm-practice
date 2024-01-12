function checkOneString(a, b) {
    let dif = 0;
    for (let index = 0; index < a.length; index++) {
        const charA = a[index];
        const charB = b[index];
        if (charA !== charB) {
            dif++;
            if (dif === 2) {
                return false;
            }
        }
    }

    return dif === 1;
}

function solution(begin, target, words) {
    var answer = Infinity;
    const visited = new Array(words.length).fill(false);

    function dfs(visited, node, state) {
        let copy = [...visited];

        // 같으면 리턴
        if (state === target) {
            answer = Math.min(visited.filter(val=> val ===true).length,answer)
        }

        if(!visited.findIndex(val => val === false) === -1) answer = 0;

        // 온거 표시함
        copy[node] = true;

        words.forEach((val, ind) => {
            if (!copy[ind] && checkOneString(state, val)) {
                // 하나만 다를 경우 들어간다.
                dfs(copy, ind, val);
            }
        });
    }

    words.forEach((_, node) => {
        dfs(visited, node, begin, target);
    });

    return Number.isFinite(answer) ? answer : 0;
}