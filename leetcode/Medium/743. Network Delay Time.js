var networkDelayTime = function(times, n, k) {
    const network = new Array(n + 1).fill(Infinity);
    const maps = new Map();

    for (let i = 1; i <= n; i++) {
        maps.set(i, []);
    }

    for (let [from, to, value] of times) {
        maps.get(from).push([to, value]);
    }

    network[k] = 0;

    const minHeap = [[k, 0]];

    while (minHeap.length > 0) {
        minHeap.sort((a, b) => a[1] - b[1]);
        const [node, currentCost] = minHeap.shift();

        if (currentCost > network[node]) continue;

        for (let [nextNode, nextCost] of maps.get(node)) {
            const newCost = currentCost + nextCost;

            if (newCost < network[nextNode]) {
                network[nextNode] = newCost;
                minHeap.push([nextNode, newCost]);
            }
        }
    }

    const result = Math.max(...network.slice(1));

    return result === Infinity ? -1 : result;
};
