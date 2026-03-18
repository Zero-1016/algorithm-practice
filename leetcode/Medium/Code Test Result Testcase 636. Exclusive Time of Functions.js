/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  let stack = [];
  let result = new Array(n).fill(0);
  let lastTime = 0;

  for (const log of logs) {
    const [id, action, time] = log.split(":");
    const currentTime = Number(time);
    const currentId = Number(id);

    if (action === "start") {
      if (stack.length > 0) {
        result[stack[stack.length - 1]] += currentTime - lastTime;
      }
      stack.push(currentId);
      lastTime = currentTime;
    } else {
      const topId = stack.pop();
      result[topId] += currentTime - lastTime + 1;
      lastTime = currentTime + 1;
    }
  }

  return result;
};
