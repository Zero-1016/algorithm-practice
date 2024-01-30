function solution(number, k) {
    const stack = [];

    for (let i = 0; i < number.length; i++) {
        const currentDigit = number[i];
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] < currentDigit) {
            stack.pop();
            k--;
        }
        stack.push(currentDigit);
    }
    
    while (k > 0) {
        stack.pop();
        k--;
    }

    return stack.join('');
}