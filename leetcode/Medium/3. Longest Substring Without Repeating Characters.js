/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if(s === "") return 0
    const hashTable = new Map()
    let rear = 0
    let head = 0

    let maxAnswer = 1;

    for (let i = 0; i < s.length; i++) {
        if (hashTable.has(s[i])) {
            head = Math.max(hashTable.get(s[i]),head)
        }
        rear++
        hashTable.set(s[i], rear)
        maxAnswer = Math.max(maxAnswer, rear - head)
    }

    return maxAnswer
};
