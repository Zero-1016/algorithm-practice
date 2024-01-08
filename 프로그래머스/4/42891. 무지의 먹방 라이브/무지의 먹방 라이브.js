function solution(food_times, k) {
    let totalSum = food_times.reduce((a, b) => a + b, 0)
    let q = []
    let sumValue = 0

    food_times.map((value, index) => {
        q.push({
            index: index + 1,
            value,
        })
    })

    q.sort((a, b) => b.value - a.value)

    if (totalSum <= k) return -1

    while ((q[q.length - 1].value - sumValue) * q.length <= k) {
        let minValue = q[q.length - 1].value
        k -= (minValue - sumValue) * q.length
        sumValue = minValue

        while (q[q.length - 1].value === minValue) {
            q.pop()
        }
    }


    q.sort((a, b) => a.index - b.index)
    return q[k % q.length].index
}