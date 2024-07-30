function isShallowEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }

    return true;
}

function solution(want, number, discount) {
    const wantObj = {};
    for (let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }

    let answer = 0;

    for (let i = 0; i <= discount.length - 10; i++) {
        const discount10d = {};

        for (let j = i; j < i + 10; j++) {
            if (discount10d[discount[j]] !== undefined) {
                discount10d[discount[j]] += 1;
            } else {
                discount10d[discount[j]] = 1;
            }
        }

        if (isShallowEqual(discount10d, wantObj)) {
            answer += 1;
        }
    }

    return answer;
}
