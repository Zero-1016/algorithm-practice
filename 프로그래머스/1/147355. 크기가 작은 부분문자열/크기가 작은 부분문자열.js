function solution(t, p) {
    var answer = [];
    const splitLength = p.length;
    [...t].forEach((v, i) => {
        if (i + splitLength <= t.length) {
            answer.push([...t].splice(i, splitLength));
        }
    });
    return answer.filter((v) => Number(v.join('')) <= Number(p)).length;
}