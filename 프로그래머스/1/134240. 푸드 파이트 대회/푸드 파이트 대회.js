
function solution(food) {
    const FOOD = food.splice(1, food.length).map((v) => {
        return v % 2 === 0 ? v / 2 : (v - 1) / 2;
    });
    let result = '';

    for (let i = 0; i <= FOOD.length + 1; i++) {
        for (let j = 0; j < FOOD[i]; j++) {
            result += String(i + 1);
        }
    }
    result += '0' + result.split('').reverse().join('');

    return result;
}

