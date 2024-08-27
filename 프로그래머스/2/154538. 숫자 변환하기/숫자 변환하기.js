class Queue {
    constructor() {
        this.heap = []
        this.head = 0
        this.rear = 0
    }

    push(item) {
        this.heap.push(item)
        this.rear++
    }

    pop() {
        return this.heap[this.head++]
    }

    isEmpty() {
        return this.head === this.rear
    }
}

function solution(x, y, n) {
    if (x === y) return 0;
    var answer = -1;
    const queue = new Queue()
    queue.push([y, 0])

    while (!queue.isEmpty()) {
        const [value, count] = queue.pop()
        if (value === x) {
            answer = count
            break
        }

        if (value % 3 === 0) {
            queue.push([value / 3, count + 1])
        }

        if (value % 2 === 0) {
            queue.push([value / 2, count + 1])
        }

        if (value - n > 0) {
            queue.push([value - n, count + 1])
        }
    }

    return answer;
}