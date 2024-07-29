function solution(cards1, cards2, goal) {
    const n = goal.length;
    let [index_1, index_2] = [0, 0]
    let temp = true

    for (let i = 0; i < n && temp; i++) {
        if (cards1[index_1] === goal[i]) {
            index_1++
            continue
        }
        if (cards2[index_2] === goal[i]) {
            index_2++
            continue
        }
        temp = false
    }

    return temp ? "Yes" : "No";
}
