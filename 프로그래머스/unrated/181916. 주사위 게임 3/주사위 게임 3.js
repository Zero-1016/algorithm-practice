function solution(a, b, c, d) {
    const array = [a, b, c, d]
    const number = new Set(array)

    let p = 0
    let q = 0
    let r = 0

    if (number.size === 1) return a * 1111


    switch (number.size) {
        case 1:
            return a * 1111
        case 2:
            let temp = false
            number.forEach(value => {
                if (array.filter(v => v === value).length === 3) {
                    if (p !== 0) {
                        let flag = p
                        p = value
                        q = flag
                    }
                    temp = true;
                }

                if (p === 0) {
                    p = value
                }

                if (temp && p !== 0 && value !== p) {
                    q = value
                }

                if (!temp && p !== 0) {
                    q = value
                }
            })

            return temp ? (10 * p + q) ** 2 : (p + q) * Math.abs(p - q)
        case 3:
            number.forEach(value => {
                if (array.filter(v => v === value).length === 2) {
                    p = value
                } else {
                    if (q === 0) {
                        q = value
                    } else {
                        r = value
                    }
                }
            })
            return q * r
        case 4:
            return Math.min(...array)
    }
}