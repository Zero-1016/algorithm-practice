
function dfs(k, dungeons, prev) {
    let max = prev; 
    dungeons.forEach((v, i) => {
      const [req, use] = v;
      if (!req || req > k) return max;
      const copy = [...dungeons].map((v) => [...v]);
      copy[i] = [null, null];
      max = Math.max(max, dfs(k - use, copy, prev + 1));
    });
    return max;
}

function solution(k, dungeons) {
    return dfs(k, dungeons, 0);
}