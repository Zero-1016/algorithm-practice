function solution(participant, completion) {
    const hash = {}

    for (const name of participant) {
        if (hash[name]) {
            hash[name] += 1
        } else {
            hash[name] = 1
        }
    }

    for (const name of completion) {
        hash[name] -= 1
    }

    for (const name of participant) {
        if (hash[name] === 1) {
            return name
        }
    }
}