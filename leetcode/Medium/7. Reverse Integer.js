/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isMinus = x < 0;
    const stringX = String(Math.abs(x)).split('').reverse().join('');
    
    const reversedNumber = Number(stringX);
    const result = isMinus ? -reversedNumber : reversedNumber;

    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
        return 0;
    }
    
    return result;
};
