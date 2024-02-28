class Map {
    constructor() {
        this.position = [0, 0]
        this.moveCommands = new Set()
    }

    move(command) {
        switch (command) {
            case "U":
                this.moveTop();
                break;
            case "R":
                this.moveRight();
                break;
            case "D":
                this.moveBottom();
                break;
            case "L":
                this.moveLeft();
                break;
        }
    }

    moveTop() {
        let [x, y] = this.position;
        if (y + 1 === 6) return

        this.moveCommands.add(`c-${y + 1}-${y}-${x}`)
        y++;


        this.position = [x, y];
    }

    moveRight() {
        let [x, y] = this.position;
        if (x + 1 === 6) return

        this.moveCommands.add(`r-${x + 1}-${x}-${y}`)
        x++;

        this.position = [x, y];
    }

    moveBottom() {
        let [x, y] = this.position;
        if (y - 1 === -6) return

        this.moveCommands.add(`c-${y}-${y - 1}-${x}`)
        y--;

        this.position = [x, y];
    }

    moveLeft() {
        let [x, y] = this.position;
        if (x - 1 === -6) return

        this.moveCommands.add(`r-${x}-${x - 1}-${y}`)
        x--

        this.position = [x, y];
    }

    getMoveLength() {
        console.log(this.moveCommands)
        return this.moveCommands.size;
    }
}


function solution(dirs) {
    const map = new Map();

    [...dirs].forEach(element => {
        map.move(element)
    });

    return map.getMoveLength();
}