function solution(clothes) {
    let answer = 1;
    const TYPE = new Set(clothes.map((v) => v[1]));
    [...TYPE].forEach((value) => {
        answer *= (clothes.filter((val) => val[1] === value).length + 1);
    });
    return answer - 1;
}