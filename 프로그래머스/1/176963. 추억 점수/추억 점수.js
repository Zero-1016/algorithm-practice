function solution(name, yearning, photo) {
    const point = new Map()
    name.forEach((userName, i) => {
        point.set(userName, yearning[i])
    });
    var answer = [];
    photo.forEach((value) => {
        let total = 0
        value.forEach(v => {
            if (point.has(v)) {
                total += point.get(v)
            }
        })
        answer.push(total)
    })
    return answer;
}