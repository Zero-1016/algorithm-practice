class UnionFind {
    constructor(size) {
        this.parent = Array.from({ length: size }, (_, i) => i);
        this.rank = Array(size).fill(0);
    }

    find(i) {
        if (this.parent[i] !== i) {
            this.parent[i] = this.find(this.parent[i]);  // 경로 압축
        }
        return this.parent[i];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);

        if (rootX !== rootY) {
            if (this.rank[rootX] > this.rank[rootY]) {
                this.parent[rootY] = rootX;
            } else if (this.rank[rootX] < this.rank[rootY]) {
                this.parent[rootX] = rootY;
            } else {
                this.parent[rootY] = rootX;
                this.rank[rootX]++;
            }
        }
    }
}

// Example usage
const uf = new UnionFind(10);
uf.union(0, 1);
uf.union(1, 2);
console.log(uf.find(0)); // Output: root of the set containing 0, which should be 0
console.log(uf.find(1)); // Output: root of the set containing 1, which should be 0
console.log(uf.find(2)); // Output: root of the set containing 2, which should be 0
