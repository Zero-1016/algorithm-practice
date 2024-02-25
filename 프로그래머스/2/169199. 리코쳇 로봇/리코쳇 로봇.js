class RicochetGame {
    constructor(map, position) {
        this.map = map;
        this.col = map.length;
        this.row = map[0].length;
        this.position = position;
    }

    move(number) {
        switch (number) {
            case 0:
                this.moveTop();
                break;
            case 1:
                this.moveRight();
                break;
            case 2:
                this.moveBottom();
                break;
            case 3:
                this.moveLeft();
                break;
        }
    }

    moveTop() {
        let [x, y] = this.position;

        while (y - 1 >= 0 && this.map[y - 1][x] !== 'D') {
            y--;
        }

        this.position = [x, y];
    }

    moveRight() {
        let [x, y] = this.position;

        while (x + 1 < this.row && this.map[y][x + 1] !== 'D') {
            x++;
        }

        this.position = [x, y];
    }

    moveBottom() {
        let [x, y] = this.position;

        while (y + 1 < this.col && this.map[y + 1][x] !== 'D') {
            y++;
        }

        this.position = [x, y];
    }

    moveLeft() {
        let [x, y] = this.position;

        while (x - 1 >= 0 && this.map[y][x - 1] !== 'D') {
            x--;
        }

        this.position = [x, y];
    }

    getPosition() {
        return this.position;
    }
}

function solution(board) {
    var answer = 0;
    const startPointY = board.findIndex((val) => val.includes('R'));
    board = board.map((v) => v.split(''));
    const startPointX = board[startPointY].findIndex((val) => val === 'R');
    const startPoint = [startPointX, startPointY];

    const goalPointY = board.findIndex((val) => val.includes('G'));
    const goalPointX = board[goalPointY].findIndex((val) => val === 'G');
    const goalPoint = [goalPointX, goalPointY].toString();

    const visited = new Set();

    let goalCount = Infinity

    if (goalPoint === startPoint.toString()) return 0;


    let queue = [[startPoint, 0]];

   while (queue.length > 0) {
        let [currentPoint, count] = queue.shift();
        const visitPosition = currentPoint.toString();

        if(goalPoint === visitPosition){
            goalCount = Math.min(count, goalCount);
        }

        if (visited.has(visitPosition)) continue;

        visited.add(visitPosition);

        for (let i = 0; i < 4; i++) {
            if(goalCount === count + 1) break;
            const copy = new RicochetGame(board, [...currentPoint]);
            copy.move(i);
            queue.push([copy.getPosition(), count + 1]);
        }
    }

    return goalCount === Infinity ? -1 : goalCount;
}