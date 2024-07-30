1
2
3
4
5
6
7
8
9
10
11
12
13
function solution(participant, completion) {
    const map = new Map();
    let result = ""
    participant.forEach(name => map.set(name, (map.get(name) || 0) + 1));
    completion.forEach(name => map.set(name, (map.get(name) || 0) - 1));
    map.forEach((value, key) => {
        if (value === 1) {
            result = key
        }
    })
    return result
}