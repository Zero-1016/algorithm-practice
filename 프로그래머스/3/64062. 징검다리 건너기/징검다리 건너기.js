function can_cross(stones, k, mid) {
    let zero_count = 0;

    for (let stone of stones) {
        if (stone - mid <= 0) {
            zero_count += 1;
            if (zero_count >= k) return false;
        } else {
            zero_count = 0;
        }
    }
    return true;
}

function solution(stones, k) {
    let left = 1;
    let right = 200000000;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (can_cross(stones, k, mid)) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer + 1;
}
