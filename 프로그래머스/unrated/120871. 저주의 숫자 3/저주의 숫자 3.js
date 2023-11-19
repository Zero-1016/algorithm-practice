const checkNumber = (number) => {
    return number % 3 === 0 || String(number).split('').includes('3');
};

function solution(n) {
    count = 0;
    for (let i = 0; i < n; i++) {
        count++;

        while (checkNumber(count)) {
            count++;
        }
    }
    return count;
}
