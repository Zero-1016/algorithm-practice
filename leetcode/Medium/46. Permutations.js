// 배열로 받은 수를 이용하여 만들수 있는 모든 경우의 수를 반환합니다.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];
  const visited = new Array(nums.length).fill(false);

  const dfs = (path) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      path.push(nums[i]);
      dfs(path);
      path.pop();
      visited[i] = false;
    }
  };

  dfs([]);
  return result;
};
