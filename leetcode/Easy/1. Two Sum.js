/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        const targetNumber = target - num;

        if (map.has(targetNumber)) {
            return [map.get(targetNumber), index];
        }

        map.set(num, index);
    }
};
