function solution(id_list, report, k) {
    var answer = new Array(id_list.length).fill(0);
    const noRepeatReport = new Set(report);
    const userReportList = new Map(id_list.map((v) => [v, []]));

    for (let i of noRepeatReport) {
        const [a, b] = i.split(' ');
        const prev = userReportList.get(b);
        userReportList.set(b, [...prev, a]);
    }

    for (let i of userReportList) {
        if (i[1].length >= k) {
            const reportTargetIdIndex = id_list.findIndex((value) => value === i[0]);
            for (let j of i[1]) {
                const reportUserIdIndex = id_list.findIndex((value) => value === j);
                answer[reportUserIdIndex]++;
            }
        }
    }
    return answer;
}