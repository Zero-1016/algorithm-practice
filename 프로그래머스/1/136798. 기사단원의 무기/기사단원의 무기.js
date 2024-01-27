function getDivisors(num) {
    const divisors = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (num / i != i) divisors.push(num / i);
        }
    }

    return divisors;
}

function solution(number, limit, power) {
    var answer = [];
    for (let i = 1; i <= number; i++) {
        answer.push(getDivisors(i).length);
    }

    return answer.map((v) => (v > limit ? power : v)).reduce((prev, next) => prev + next);
}