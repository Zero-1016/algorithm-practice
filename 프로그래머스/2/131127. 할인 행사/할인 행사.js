function solution(want, number, discount) {
    var answer = 0;
    let wants = []
    want.forEach((value, index) => {
        for (let i = 0; i < number[index]; i++) {
            wants.push(value)
        }
    })
    wants.sort()

    discount.forEach((_, index) => {
        const TodayDiscount = discount.slice(index, index + 10);
        if (TodayDiscount.length !== wants.length) return;
        TodayDiscount.sort()
        if (TodayDiscount.toString() == wants.toString()) answer++
    });
    return answer;
}