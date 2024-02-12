function makeArr(str) {
    const arr = []
    for (let i = 0; i < str.length - 1; i++) {
        const pair = str.slice(i, i + 2)
        if (pair.match(/^[a-zA-Z]{2}$/)) {
            arr.push(pair)
        }
    }
    return arr
}

function getJaccard(arr1, arr2) {
    const set1 = new Map();
    const set2 = new Map();

    for (const val of arr1) {
        set1.set(val, (set1.get(val) || 0) + 1);
    }

    for (const val of arr2) {
        set2.set(val, (set2.get(val) || 0) + 1);
    }

    let intersection = 0;
    let union = 0;

    for (const [key, val] of set1) {
        if (set2.has(key)) {
            intersection += Math.min(val, set2.get(key));
            union += Math.max(val, set2.get(key));
        } else {
            union += val;
        }
    }

    for (const [key, val] of set2) {
        if (!set1.has(key)) {
            union += val;
        }
    }

    return intersection / union;
}

function solution(str1, str2) {
    const CHECK = 65536
    const changeArr1 = makeArr(str1.toLowerCase())
    const changeArr2 = makeArr(str2.toLowerCase())
    if (changeArr1.length + changeArr2.length === 0) return CHECK
    return Math.floor(getJaccard(changeArr1, changeArr2) * CHECK)
}