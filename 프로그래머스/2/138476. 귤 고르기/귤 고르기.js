function solution(k, tangerine) {
    tangerine.sort((a, b) => a - b)
    const ea = []
    tangerine.forEach(e => {
        if (!ea.find(value => value.name === e)) {
            ea.push({ name: e, value: 1 })
        } else {
            ea.find(value => value.name === e).value++
        }
    })

    ea.sort((a, b) => b.value - a.value)
    let count = 0;
    for (let i = 0; i < k; i++) {
        while (true) {
            let result = ea[count].value -= 1
            
            if (result === 0 && i + 1 !== k) {
                count++
            }
            break
        }
    }

    return count + 1;
}