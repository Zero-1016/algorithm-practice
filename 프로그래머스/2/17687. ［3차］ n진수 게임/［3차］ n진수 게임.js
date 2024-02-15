function solution(n, t, m, p) {
    let title = ""
    let needNumbers = []
    let count = 0

    for (let i = 0; i < t; i++) {
        needNumbers.push(p-1)
        p += m
    }

    while (true) {
        if (title.length > needNumbers[needNumbers.length - 1]) break
        title += count.toString(n).toUpperCase()
        count++;
    }

    return needNumbers.map(v => title[v]).join('');
}