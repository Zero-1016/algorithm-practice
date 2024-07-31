function solution(id_list, report, k) {
    const report_list = {}
    const count = {}

    for (const reported of [...new Set(report)]) {
        const [ban_user, report_user] = reported.split(' ')
        if (report_list.hasOwnProperty(report_user)) {
            report_list[report_user].push(ban_user)
        } else {
            report_list[report_user] = [ban_user]
        }
    }

    for (const report_user of Object.keys(report_list)) {

        if (report_list[report_user].length >= k) {
            for (const uid of report_list[report_user]) {
                count[uid] = (count[uid] || 0) + 1
            }
        }
    }

    var answer = [];

    for (const uid of id_list) {
        answer.push(count[uid] || 0)
    }

    return answer;
}