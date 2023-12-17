function solution(n, arr1, arr2) {
    var answer = [];
    const ar_a = [];
    const ar_b = [];
    arr1.forEach((element) => {
        let chart = element.toString(2).split('');
        let zeroCount = n - chart.length;
        for (let i = 0; i < zeroCount; i++) {
            chart.unshift(0);
        }
        ar_a.push(chart);
    });

    arr2.forEach((element) => {
        let chart = element.toString(2).split('');
        let zeroCount = n - chart.length;
        for (let i = 0; i < zeroCount; i++) {
            chart.unshift(0);
        }
        ar_b.push(chart);
    });

    ar_a.forEach((value, y) => {
        const section = [];
        value.forEach((val, x) => {
            if (ar_a[y][x] == 1 || ar_b[y][x] == 1) {
                section.push('#');
            }
            else{
                section.push(' ')
            }
        });
        answer.push(section.join(''));
    });
    return answer;
}