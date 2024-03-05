function solution(n, stations, w) {
    var answer = 0;
    var position = 1;
    var stationIndex = 0;

    while (position <= n) {
        if (stationIndex < stations.length && stations[stationIndex] - w <= position) {
            position = stations[stationIndex++] + w + 1;
        } else {
            answer++;
            position += w * 2 + 1;
        }
    }

    return answer;
}
