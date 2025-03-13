/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const array = new Array(numRows).fill(0).map((_, index) => [index]);
  let count = numRows;

  if (numRows === 1) return s;

  while (count < s.length) {
    for (let i = 0; i < numRows; i++) {
      const lastChar = array[i][array[i].length - 1];
      const nextIndex = lastChar + (numRows - i - 1) * 2;
      if (nextIndex >= s.length + 1) continue;
      if (s.length < lastChar || nextIndex === lastChar) continue;
      array[i].push(nextIndex);
      count++;
    }

    if (count >= s.length) break;

    for (let i = numRows - 1; i > 0; i--) {
      const lastChar = array[i][array[i].length - 1];
      const nextIndex = lastChar + i * 2;
      if (nextIndex >= s.length + 1) continue;
      if (s.length < lastChar || nextIndex === lastChar) continue;
      array[i].push(nextIndex);
      count++;
    }
  }

  return array.flatMap((val) => val.map((v) => s[v])).join("");
};
