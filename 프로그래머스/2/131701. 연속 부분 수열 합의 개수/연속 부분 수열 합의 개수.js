function solution(elements) {
    let total_Sum = new Set();
    for (let i = 1; i <= elements.length; i++) {
        for (let start_point = 0; start_point < elements.length; start_point++) {
            let sum = 0;
            let count = 0;
            while (true) {
                if (count === i) break;
                const check = start_point + count > elements.length - 1 ? start_point + count - elements.length : start_point + count
                sum += elements[check]
                count++;
            }
            total_Sum.add(sum)
        }
    }
    return total_Sum.size;
}