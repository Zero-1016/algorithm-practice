function maxSubArray(nums: number[]): number {
    let maxNum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxNum = Math.max(maxNum, currentSum);
    }

    return maxNum;
}
