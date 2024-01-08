class Cache {
    constructor(cacheSize) {
        this.cacheMemory = new Map();
        this.pointerMemory = [];
        this.cacheSize = cacheSize;
        this.total = 0;
    }

    /*
    addCache(input) {
        input = input.toLowerCase();
        if (!this.cacheMemory.has(input) && this.cacheMemory.size === this.cacheSize) {
            this.removeCache(this.cacheSize - 1);
        }

        if (this.cacheMemory.has(input)) {
            this.total += 1;
            const selectIndex = this.cacheMemory.get(input);
            for (let i = selectIndex; i > 0; i--) {
                const prevIndex = this.pointerMemory.get(i - 1);
                const prevTitle = this.cacheMemory.get(prevIndex);
                this.pointerMemory.set(i, prevTitle);
                this.cacheMemory.set(prevTitle, i);
            }
            this.pointerMemory.set(0, input);
            this.cacheMemory.set(input, 0);
        } else {
            this.total += 5;
            const size = this.cacheMemory.size;
            for (let i = size - 1; i >= 0; i--) {
                const prevIndex = this.pointerMemory.get(i);
                const prevTitle = this.cacheMemory.get(prevIndex);
                this.pointerMemory.set(i + 1, prevTitle);
                this.cacheMemory.set(prevTitle, i + 1);
            }
            this.pointerMemory.set(0, input);
            this.cacheMemory.set(input, 0);
        }
    }
    */

    addCache(input) {
        input = input.toLowerCase();
        if (!this.cacheMemory.has(input) && this.cacheMemory.size === this.cacheSize) {
            this.removeCache();
        }

        if (this.cacheMemory.has(input)) {
            this.total += 1;
            const selectIndex = this.pointerMemory.indexOf(input);
            this.pointerMemory.splice(selectIndex, 1);
        } else {
            this.total += 5;
        }
        this.pointerMemory.unshift(input);
        this.cacheMemory.set(input, 0);
    }

    removeCache() {
        const deleteTitle = this.pointerMemory.pop();
        if (deleteTitle !== undefined) {
            this.cacheMemory.delete(deleteTitle);
        }
    }

    getTotal() {
        console.log(this.cacheMemory)
        return this.total;
    }
}

function solution(cacheSize, cities) {
    const cache = new Cache(cacheSize);

    if (cacheSize === 0) {
        return cities.length * 5
    }

    cities.forEach(val => {
        cache.addCache(val)
    })

    return cache.getTotal();
}