function solution(n, costs) {
    let minValue = Infinity;
    costs.sort((a, b) => a[2] - b[2]);

    const rank = Array(n).fill(0);
    const parent = Array.from(Array(n), (_, index) => index);

    function findParent(i) {
        if (parent[i] !== i) parent[i] = findParent(parent[i]);
        return parent[i];
    }
    
    function union(a, b) {
        let rootA = findParent(a);
        let rootB = findParent(b);
        if (rootA !== rootB) {  if (rank[rootA] > rank[rootB]) {
            parent[rootB] = rootA;
        } else if (rank[rootA] < rank[rootB]) {
            parent[rootA] = rootB;
        } else {
            parent[rootB] = rootA;
            rank[rootA]++;
        } }
    }

    let edges = 0;
    let sumValue = 0;
    for (let [start, end, value] of costs) {
        if (findParent(start) !== findParent(end)) {
            union(start, end);
            sumValue += value;
            edges++;
            if (edges === n - 1) break; 
        }
    }

    return sumValue;
}
