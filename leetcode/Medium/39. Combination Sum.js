/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    function backtrack(start, combi, sum) {
        if (sum === target) {
            return result.push([...combi])
        }

        if (sum > target) {
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            combi.push(candidates[i]);
            backtrack(i, combi, sum + candidates[i]);
            combi.pop();
        }
    }

    backtrack(0, [], 0)
    
    return result
};
