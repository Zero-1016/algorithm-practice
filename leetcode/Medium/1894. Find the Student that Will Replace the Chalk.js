/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function (chalk, k) {
    const cycle = chalk.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    k %= cycle
    for (let i = 0; i < chalk.length; i++) {
        if (k - chalk[i] < 0) {
            return i
        }
        k -= chalk[i]
    }
};
