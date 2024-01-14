function getDivisor(number) {
    const result = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) result.push(i);
    }
    return result;
}

function getGreatestCommonFactor(a, b) {
    const x = getDivisor(a).sort((a, b) => a - b);
    const y = getDivisor(b).sort((a, b) => a - b);

    let count = x.length - 1;
    while (count >= 0 && !y.includes(x[count])) {
        count--;
    }

    return x[count];
}

function solution(a, b) {
    const number = getGreatestCommonFactor(a, b);
    a /= Math.ceil(number);
    b /= Math.ceil(number);

    while (b % 2 === 0) {
        b /= 2;
    }
    while (b % 5 === 0) {
        b /= 5;
    }

    return b === 1 ? 1 : 2
}