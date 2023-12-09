function solution(n) {
    let check = n;
    const length_1 = String(n.toString(2)).replaceAll('0', '');
    while (true) {
        check += 1
        const length_2 = String(check.toString(2)).replaceAll('0', '');
        if(length_1 === length_2) break
    }
    return check;
}
