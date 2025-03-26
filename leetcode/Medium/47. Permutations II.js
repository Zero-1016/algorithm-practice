/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b);
    const result = [];
    const comb = [];
    const used = new Array(nums.length).fill(false);
    backtrack();
    return result;

    function backtrack(){
        if (comb.length === nums.length) return result.push([...comb]);

        for (let i=0; i<nums.length; i++){
            if (used[i] || (nums[i]===nums[i-1] && !used[i-1])) continue;
            used[i] = true;
            comb.push(nums[i]);
            backtrack();
            used[i] = false;
            comb.pop();
        }

    }
};
