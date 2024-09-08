/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if(nums.length === 1) return nums[0]

    const num1 = [...nums].slice(0, nums.length - 1)
    const num2 = [...nums].slice(1, nums.length)

    function robSearch(maps) {
        const n = maps.length;
        if (n === 1) return maps[0];

        let dp = Array(n).fill(0);
        dp[0] = maps[0];
        dp[1] = Math.max(maps[0], maps[1]);

        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + maps[i]);
        }

        return dp[n - 1];
    }

    return Math.max(robSearch(num1), robSearch(num2))
};
