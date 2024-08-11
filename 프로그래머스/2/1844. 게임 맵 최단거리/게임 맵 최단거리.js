class Queue {
    constructor() {
        this.items = [];
        this.front = 0;
        this.rear = 0;
    }

    push(item) {
        this.items.push(item);
        this.rear++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.front++];
    }

    isEmpty() {
        return this.front === this.rear;
    }
}

function solution(maps) {
    const [x_length, y_length] = [maps[0].length, maps.length];
    const directions = [[0, -1], [0, 1], [1, 0], [-1, 0]];
    const queue = new Queue();
    const visited = new Set();

    queue.push([0, 0, 1]);
    visited.add('0,0');

    while (!queue.isEmpty()) {
        const [x, y, dist] = queue.pop();

        if (x === x_length - 1 && y === y_length - 1) {
            return dist;
        }

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            if (newX >= 0 && newY >= 0 && newX < x_length && newY < y_length && maps[newY][newX] === 1) {
                const newPos = `${newX},${newY}`;
                if (!visited.has(newPos)) {
                    visited.add(newPos);
                    queue.push([newX, newY, dist + 1]);
                }
            }
        }
    }

    return -1;
}

const test_case = [
    [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]],
    [[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]
];

for (const t_case of test_case) {
    console.log(solution(t_case));
}
