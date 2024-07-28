function solution(progresses, speeds) {
    var answer = [];

    const n = progresses.length
    const days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]))

    let count = 0;
    let maxDays = days[0]

    for (let i = 0; i < n; i++) {
        if (days[i] <= maxDays) {
            count++
        } else {
            answer.push(count)
            count = 1
            maxDays = days[i]
        }
    }
    answer.push(count)
    return answer;
}