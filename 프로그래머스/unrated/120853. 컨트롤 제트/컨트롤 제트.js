function solution(s) {
    const answer = s.split(' ');
    let total = 0;
    let temp = 0;

    answer.forEach((element) => {
        if ((element == 'Z')) {
            total -= temp;
        } else {
            total += Number(element);
            temp = Number(element);
        }
    });

    return total;
}
