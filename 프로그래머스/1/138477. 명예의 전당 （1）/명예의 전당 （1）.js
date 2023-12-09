function solution(k, score) {
    const 꼴찌모음집 = [];
    const 명예의전당 = [];
    score.forEach((element, ind) => {
        명예의전당.push(element);
        명예의전당.sort((a, b) => b - a);
        명예의전당.length = Math.min(ind + 1, k);
        꼴찌모음집.push(명예의전당[명예의전당.length - 1]);
    });
    return 꼴찌모음집;
}
