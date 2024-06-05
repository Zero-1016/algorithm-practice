function solution(routes) {
    var answer = 0;
    routes.sort((a, b) => b[1] - a[1])
    console.log(routes)

    while (routes.length !== 0) {
        const searchPoint = routes[routes.length - 1][1];
        while (true) {
            if (routes.length === 0 || searchPoint < routes[routes.length - 1][0]) {
                break;
            }
            routes.pop();
        }

        // 감시카메라가 추가되었으므로 더해준다.
        answer++;
    }

    return answer
}
