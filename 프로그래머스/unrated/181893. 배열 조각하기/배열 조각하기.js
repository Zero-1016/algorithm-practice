function solution(arr, query) {
    query.forEach((val, index) => {
        const queryValue = query[index];
        if (index % 2 === 0) {
            arr.splice(queryValue + 1, 1);
            arr = arr.filter((v,i)=> queryValue >= i)
        } else {
            arr = arr.filter((v,i)=> queryValue <= i)
        }
    });
    return arr;
}