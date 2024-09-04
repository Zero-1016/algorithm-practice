/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0
    let right = height.length - 1

    let maxSize = 0

    while (left < right) {
        const size = right - left
        const L = size * Math.min(height[right], height[left])

        maxSize = Math.max(maxSize, L)

        if (height[left] > height[right]) {
            right--
        } else {
            left++
        }
    }


    return maxSize
};
