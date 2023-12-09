function solution(s) {
    const store = [];
    s.split('').forEach((val, ind) => {
        if (store[store.length - 1] === val) {
            store.pop();
        } else {
            store.push(val);
        }
    });
    return store.length === 0 ? 1 : 0;
}
