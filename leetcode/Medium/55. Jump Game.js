var canJump = function (nums) {
    if (nums.length === 1) return true;

    let maxReach = nums[0];
    let cursor = 0;

    while (cursor <= maxReach) {
        maxReach = Math.max(maxReach, cursor + nums[cursor]);

        if (maxReach >= nums.length - 1) {
            return true;
        }

        cursor++;
    }

    return false;
};
