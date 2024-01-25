function solution(topping) {
    let count = 0
    let left = [];
    let right = [];
    const reTopping = [...topping].reverse()
    let leftTemp = new Set();
    let rightTemp = new Set();
    for (let i = 0; i < topping.length - 1; i++) {
        leftTemp.add(topping[i])
        rightTemp.add(reTopping[i])
        left.push(leftTemp.size)
        right.push(rightTemp.size)
    }

    right.reverse();

    for (let i = 0; i < right.length; i++) {
        if (left[i] === right[i]) {
            count++;
        }
    }

    return count
}