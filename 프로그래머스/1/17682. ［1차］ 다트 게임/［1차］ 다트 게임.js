function isNumber(number) {
    return /[0-9]/g.test(number)
}

function solution(dartResult) {
    const sql = []
    let temp = false;
    let str = "";
    dartResult.split('').forEach((char, index) => {
        if (index === dartResult.length - 1 || temp & isNumber(char)) {
            if (index === dartResult.length - 1) {
                str += char
                sql.push(str);
                return;
            }
            sql.push(str);
            temp = false;
            str = ""
        }
        str += char
        if (!isNumber(char)) {
            temp = true
        }
    })
    let total = 0;
    let prev = 0;
    sql.forEach((s, i) => {
        const choice = s.split('').findIndex(v => v === "S" || v === "D" || v === "T")
        let [point, bonus] = s.split(s[choice])
        point = Number(point)
        switch (s[choice]) {
            case "S":
                point = point ** 1
                break
            case "D":
                point = point ** 2
                break
            case "T":
                point = point ** 3
                break
        }

        switch (bonus) {
            case "*":
                total = total - prev + prev * 2 + point * 2
                prev = point * 2
                break;
            case "#":
                total -= point
                prev = -point
                break;
            case "":
                prev = point
                total += point
                break;
        }
    })

    return total;
}