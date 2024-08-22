function solution(park, routes) {
    const n = park.length
    const m = park[0].length
    let position

    for (let i = 0; i < n; i++) {
        if (park[i].includes("S")) {
            position = [park[i].indexOf("S"), i]
            break
        }
    }

    for (let i = 0; i < routes.length; i++) {
        let [command, count] = routes[i].split(" ");
        let point = 0
        let temp = true
        switch (command) {
            case "N":
                while (count-- > 0 && temp) {
                    point++
                    if (position[1] - point < 0 || park[position[1] - point][position[0]] === "X") {
                        temp = false
                    }
                }
                if (temp) {
                    position[1] -= point
                }
                break;
            case "S":
                while (count-- > 0 && temp) {
                    point++
                    if (position[1] + point >= n || park[position[1] + point][position[0]] === "X") {
                        temp = false
                    }
                }
                if (temp) {
                    position[1] += point
                }
                break;
            case "W":
                while (count-- > 0 && temp) {
                    point++
                    if (position[0] - point < 0 || park[position[1]][position[0] - point] === "X") {
                        temp = false
                    }
                }
                if (temp) {
                    position[0] -= point
                }
                break;
            case "E":
                while (count-- > 0 && temp) {
                    point++
                    if (position[0] + point >= m || park[position[1]][position[0] + point] === "X") {
                        temp = false
                    }
                }
                if (temp) {
                    position[0] += point
                }
                break;
        }
    }
    return [position[1], position[0]];
}