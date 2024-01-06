function solution(money) {
    let first = [0, money[0]];
    let last = [0, 0];

    for (let i = 2; i < money.length; i++) {
        first[i] = Math.max(first[i - 1], first[i - 2] + money[i-1]);
        last[i] = Math.max(last[i - 1], last[i - 2] + money[i-1]);
    }
    first[money.length] = first[money.length - 1];
    last[money.length] = Math.max(last[money.length - 1], last[money.length - 2] + money[money.length-1]);

    return Math.max(first[money.length], last[money.length]);
}