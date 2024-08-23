function solution(order) {
    var answer = 0;
    const n = order.length
    const carHasList = Array.from({length: n}, () => true)
    let cursor = 0
    const sub = []
    for (let i = 0; i < order.length; i++) {
        if (carHasList[order[i] - 1]) {
            while (cursor + 1 < order[i]) {
                sub.push(cursor + 1)
                carHasList[cursor] = false
                cursor++
            }
            carHasList[cursor] = false
            answer++
            cursor++
        } else {
            if (sub.at(-1) === order[i]) {
                sub.pop()
                answer++
            } else {
                return answer
            }
        }
    }
    return answer
}