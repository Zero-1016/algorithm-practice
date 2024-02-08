function solution(A, B) {
    var answer = 0;
    const SortA = A.sort((a, b) => b - a)
    const SortB = B.sort((a, b) => b - a)

    while (SortB.length !== 0) {
        if (SortB[SortB.length - 1] > SortA[SortA.length - 1]) {
            SortA.pop();
            SortB.pop();
            answer++;
        } else {
            SortB.pop();
        }
    }
    return answer;
}