let fs = require('fs');
let input2 = fs.readFileSync('/dev/stdin').toString().split('\n');

let numbers = [];

for (let i = 0; i < input2.length; i++) {
    if (input2[i] !== '') {
        numbers.push(input2[i].split(' '));
    }
}

const FIRST = numbers[0][0];
const SECOND = numbers[1][0];

for (let i = 0; i < SECOND.split('').length; i++) {
    console.log(FIRST * SECOND[SECOND.length - 1 - i]);
}

console.log(FIRST * SECOND)
