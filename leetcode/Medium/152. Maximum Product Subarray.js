var maxProduct = function (nums) {
    let maxSum = Math.max(...nums)
    let curMin = 1
    let curMax = 1
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            curMin = 1
            curMax = 1
            continue
        }
        tmp = curMax * nums[i]
        curMax = Math.max(curMax * nums[i], curMin * nums[i], nums[i])
        curMin = Math.min(tmp, curMin * nums[i], nums[i])
        maxSum = Math.max(maxSum, curMax)
    }

    return maxSum
};
