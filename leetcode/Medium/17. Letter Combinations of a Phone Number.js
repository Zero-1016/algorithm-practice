/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const phoneMap = new Map([
        ["2", "abc"],
        ["3", "def"],
        ["4", "ghi"],
        ["5", "jkl"],
        ["6", "mno"],
        ["7", "pqrs"],
        ["8", "tuv"],
        ["9", "wxyz"]
    ]);
    const result = [];
    if (digits === "") return result;

    function backtrack(index, path) {
        if (index === digits.length) {
            result.push(path);
            return;
        }
        const currentDigit = digits[index];
        const letters = phoneMap.get(currentDigit);
        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, path + letters[i]);
        }
    }

    backtrack(0, "");
    return result;
};
