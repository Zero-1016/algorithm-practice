function solution(targets) {
    var answer = 0;
    targets.sort((a, b) => a[1] - b[1]);
    console.log(targets);
    while (targets.length !== 0) {
        // cctv를 설치 할 수 있는 범위
        let cctvPoint = targets[targets.length - 1][0] + 0.5;
        while (true) {
            if (targets.length > 1 && targets[targets.length - 2][0] + 0.5 > cctvPoint) {
                cctvPoint = targets[targets.length - 2][0] + 0.5;
                targets.pop();
            }
            else if (targets.length > 1 && targets[targets.length - 2][1] > cctvPoint && targets[targets.length - 2][0] < cctvPoint) {
                targets.pop();
            } else{
                targets.pop();
                break
            }
        }
        answer++;
    }

    return answer;
}