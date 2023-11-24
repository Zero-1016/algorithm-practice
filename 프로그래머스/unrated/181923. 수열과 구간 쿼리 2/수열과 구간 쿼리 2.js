function solution(arr, queries) {
    const result = [];

    for (let query of queries) {
        const [s, e, k] = query;
        const subArr = arr.slice(s, e + 1).sort((a, b) => a - b);

        let answer = -1;
        for (let i = 0; i < subArr.length; i++) {
            if (subArr[i] > k) {
                answer = subArr[i];
                break;
            }
        }

        result.push(answer);
    }

    return result;
}