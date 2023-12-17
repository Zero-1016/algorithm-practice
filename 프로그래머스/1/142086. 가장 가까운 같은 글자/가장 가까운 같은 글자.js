function solution(s) {
    var answer = [];
    const find = [];
    s.split('').forEach((element, ind) => {
        const index = JSON.parse(JSON.stringify(find))
            .reverse()
            .findIndex((val) => val === element);
        answer.push(index === -1 ? -1 : index + 1);
        find.push(element);
    });
    return answer;
}