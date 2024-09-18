/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const hash = new Map();

    strs.forEach(str => {
        const selectStr = [...str].sort().join('')
        if (hash.has(selectStr)) {
            const select = hash.get(selectStr)
            select.push(str)
        } else {
            hash.set(selectStr, [str])
        }
    })

    return [...hash.values()].map((value) => value.sort()).sort((a, b) => a.length - b.length)
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
