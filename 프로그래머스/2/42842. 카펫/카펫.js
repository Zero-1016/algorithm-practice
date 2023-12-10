function solution(brown, yellow) {
    var answer = [];
    const area = brown + yellow;
    let i = 0;
    count = 2;
    while (true) {
        count++;
        if (area % count !== 0) continue;

        i = area / count;
        if (count * 2 + (i - 2) * 2 === brown) {
            break;
        }
    }

    return [count, i].sort((a, b) => b - a);
}
