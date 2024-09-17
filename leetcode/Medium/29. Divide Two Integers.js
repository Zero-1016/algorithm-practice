/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    return parseInt(dividend/divisor) > 2147483647 ? 2147483647 : parseInt(dividend/divisor)
};

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
     if (dividend === -2147483648 && divisor === -1) return 2147483647
    if(Math.abs(divisor) === 1) return dividend * divisor;

    let isNegative = false;
    let count = 0;

    if((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0))
        isNegative = true;
    
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    // if(divisor > dividend) return 0;
    // if(divisor === dividend) return isNegative ? -1 : 1;

    while(dividend >= divisor) {
        let x = 1;
        base = divisor;
        while (base <= (dividend >> 1)) {
            base = base << 1;
            x = x << 1;
        }
        count += x;
        dividend -= base;
    }

    if(isNegative) return -count;
    return count;
};
