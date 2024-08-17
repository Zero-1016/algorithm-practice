class Queue {
    constructor() {
        this.heap = [];
        this.head = 0;
        this.rear = 0;
    }

    insert(item) {
        this.heap[this.rear++] = item; 
        this.heap = this.heap.slice(this.head, this.rear); 
        this.heap.sort((a, b) => a[1] - b[1]); 
        this.head = 0; 
        this.rear = this.heap.length;
    }

    pop() {
        return this.heap[this.head++];
    }

    isEmpty() {
        return this.head === this.rear;
    }
}

function solution(jobs) {
    let answer = 0;
    let count = 0;
    let select = 0;
    const queue = new Queue();
    jobs.sort((a, b) => a[0] - b[0]);

    while (select < jobs.length || !queue.isEmpty()) {
        while (select < jobs.length && jobs[select][0] <= count) {
            queue.insert(jobs[select++]);
        }

        if (!queue.isEmpty()) {
            const [start, time] = queue.pop();
            count += time;
            answer += count - start;
        } else {
            count = jobs[select][0];
        }
    }

    return Math.floor(answer / jobs.length);
}