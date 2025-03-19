class Dequeue {
    constructor(initialItem){
        this.item = initialItem;
        this.total = initialItem.reduce((a, b) => a+b,0);
        this.head = 0;
        this.rear = initialItem.length;
    }
    
    push(item){
        this.item.push(item)
        this.total += item
    }
    
    pop(){
        const current = this.item[this.head++]
        this.total -= current
        return current;
    }
    
    size(){
        return this.rear - this.head
    }
}

function solution(queue1, queue2) {
    var answer = 0;
    
    const dequeue1 = new Dequeue(queue1)
    const dequeue2 = new Dequeue(queue2)
    
    let queueSizeTotal = queue2.length + queue1.length
    
    if((dequeue1.total + dequeue2.total) % 2 !== 0) return -1

    while(dequeue1.total !== dequeue2.total) {
        if(dequeue1.total > dequeue2.total) {
            const current = dequeue1.pop()
            dequeue2.push(current)
            answer++
        } else {
            const current = dequeue2.pop()
            dequeue1.push(current)
            answer++
        }
        
        if(answer > queueSizeTotal * 2){
           return -1
        }
    }
    
    return answer;
}