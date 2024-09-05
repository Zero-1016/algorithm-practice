var jump = function (nums) {
    if (nums.length === 1) return 0;

    let maxReach = nums[0];
    let currentEnd = nums[0]; 
    let jumps = 1; 

    for (let i = 1; i < nums.length; i++) {
        if (i > maxReach) return -1; 

        maxReach = Math.max(maxReach, i + nums[i]);  

        if (i === nums.length - 1) {
            return jumps;
        }

        if (i === currentEnd) { 
            jumps++;
            currentEnd = maxReach; 
        }
    }

    return jumps; 
};
