function solution(n, slicer, numList) {
    const [a, b, c] = slicer;

    if (n === 1) {
        return numList.slice(0, b + 1);
    } else if (n === 2) {
        return numList.slice(a);
    } else if (n === 3) {
        return numList.slice(a, b + 1);
    } else if (n === 4) {
        const result = [];
        for (let i = a; i <= b; i += c) {
            result.push(numList[i]);
        }
        return result;
    }
}