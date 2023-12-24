function solution(n) {
    let 가야할거리 = n;
    let point = 0
    while (가야할거리 !== 0) {
        const isOddNumber = 가야할거리 % 2 === 1
        if (isOddNumber) {
            point++
            가야할거리 -= 1
        }
        가야할거리 = Math.ceil(가야할거리 / 2)
    }
    return point;
}