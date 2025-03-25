/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const NumsLength = nums.length - 1
    let firstIndex = nums.findIndex(val => val === target)

    if(firstIndex === -1) return [-1, -1]

    let lastIndex = NumsLength - nums.reverse().findIndex(val => val === target)

    return [firstIndex, lastIndex]
};
