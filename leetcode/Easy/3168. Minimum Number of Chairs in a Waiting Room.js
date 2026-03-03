/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let currentNumber = 0
    let maxNumber = 0

    for(const char of s) {
        if(char === "E") {
            currentNumber++
        } else {
            currentNumber--
        }
        maxNumber = Math.max(currentNumber, maxNumber)
    }

    return maxNumber;
};
