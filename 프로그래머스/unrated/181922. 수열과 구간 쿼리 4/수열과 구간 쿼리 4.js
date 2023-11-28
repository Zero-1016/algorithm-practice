function solution(arr, queries) {
    let array = arr;
    queries.forEach((element, d) => {
        const [s, e, k] = element
        array.forEach((i, index) => {
            if (s <= index && index <= e && (index % k === 0 || k === 0))
                array[index] = ++i
        })
    });
    return array
}
