const COMMAND = {
    insert: 'I',
    delete: 'D',
    max: '1',
    min: '-1',
};

class Node {
    constructor() {
        this.list = [];
    }

    execute(value) {
        const [char, command] = value.split(' ');
        if (char === COMMAND.insert) {
            this.push(Number(command));
        }
        if (char === COMMAND.delete) {
            this.pop(command);
        }
    }

    push(value) {
        switch (this.list.length) {
            case 0:
                this.list.push(value);
                break;
            case 1:
                if (this.list[0] < value) {
                    this.list.push(value);
                } else {
                    this.list = [value, this.list[0]];
                }
                break;
            default:
                if (this.list[0] > value) {
                    this.list = [value, ...this.list];
                    break;
                }

                let number = 0;
                const prevSize = this.size();
                while (number < this.list.length) {
                    if (this.list[number] < value && value <= this.list[number + 1]) {
                        const left = [...this.list.slice(0, number + 1)];
                        const right = [...this.list.slice(number + 1, this.list.length)];
                        const newArray = [...left, value, ...right];
                        this.list = newArray;
                        break;
                    }
                    number++;
                }
                const newSize = this.size();
                if (prevSize === newSize) {
                    this.list.push(value);
                }
                break;
        }
    }

    pop(value) {
        if (this.isEmpty()) return;
        switch (value) {
            case COMMAND.max:
                this.maxPop();
                break;
            case COMMAND.min:
                this.minPop();
                break;
        }
    }

    maxPop() {
        this.list.pop();
    }

    minPop() {
        this.list.splice(0, 1);
    }

    isEmpty() {
        return this.list.length === 0;
    }

    size() {
        return this.list.length;
    }

    result() {
        if (this.isEmpty()) {
            return [0, 0];
        } else {
            return [this.list[this.list.length - 1], this.list[0]];
        }
    }
}

function solution(operations) {
    const nodeList = new Node();
    operations.forEach((element) => {
        nodeList.execute(element);
    });
    return nodeList.result();
}