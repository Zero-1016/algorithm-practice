function decimalValidation(number) {
    let temp = true;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            temp = false;
            break;
        }
    }

    return number > 1 ? temp : false;
}

function solution(numbers) {
    const numberArr = numbers.split('');
    const dic = new Set();
    const visited = new Array(numbers.length).fill(false);

    function dfs(vistied, node, string) {
        const copy = [...vistied];
        copy[node] = true;

        if (decimalValidation(Number(string))) {
            dic.add(Number(string));
        }

        numberArr.forEach((char, index) => {
            if (copy[index] === false) dfs(copy, index, string + char);
        });
    }

    numberArr.forEach((char, index) => {
        dfs(visited, index, char);
    });

    return dic.size;
}