/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    // 슬라이딩 윈도우 방식을 이용하여 풀이 진행,
    // 최대 갯수가 2를 넘어서는 안됨, 추가를 할 때마다 해당 키 값에 해당 하는 값이 몇개 인지 확인 필요.
    // 넘을 경우, 해당 수사 줄어들 때까지 leftCursor를 늘리면서 확인하는 방식으로 진행.

    // [1, 2, 3, 1, 2]

    let left = 0;
    const hashMap = new Map();
    let maxLength = -Infinity;

    for(let right = 0; right < nums.length; right++){
        const target = nums[right];

        hashMap.set(target, (hashMap.get(target) ?? 0) + 1)

        while(hashMap.get(target) > k) {
            const popTarget = nums[left];
            hashMap.set(popTarget, hashMap.get(popTarget) - 1)
            left++;
        }

        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
};
