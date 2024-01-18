function changeTime(prev, add) {
    let hour = Math.floor(prev / 100);
    let minute = prev % 100 + add;
    if (minute >= 60) {
        minute -= 60;
        hour += 1;
    }
    return hour * 100 + minute;
}


function solution(book_time) {
    const answer = [];
    const numberTime = book_time.map((v) =>
        v.map((c, i) => {
            const ans = Number(c.replace(':', ''));
            return i === 1 ? changeTime(ans, 10) : ans;
        })
    );

    numberTime.sort((a, b) => a[0] - b[0]);

    numberTime.forEach((val) => {
        answer.push(numberTime.filter((v) => v[1] > val[0] && v[0] <= val[0]).length);
    });

    return Math.max(...answer);
}