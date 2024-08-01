function solution(enroll, referral, seller, amount) {
    const total = {}
    const parents = {}

    for (let i = 0; i < enroll.length; i++) {
        parents[enroll[i]] = referral[i]
        total[enroll[i]] = 0
    }

    for (let i = 0; i < seller.length; i++) {
        let money = 100 * amount[i]
        let curName = seller[i]

        while (money > 0 && curName !== "-") {
            const tax = Math.floor(money / 10)
            total[curName] += money - tax
            curName = parents[curName]
            money = tax
        }
    }

    return enroll.map((name) => total[name]);
}