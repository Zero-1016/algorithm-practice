function solution(n, m, section) {
    var answer = 0;
    while (section.length !== 0) {
        const drawingPoint = section[section.length - 1]

        while (true) {
            if (drawingPoint - m + 1 > section[section.length - 1] || section.length === 0) {
                break
            }
            section.pop();
        }

        answer++
    }
    return answer;
}