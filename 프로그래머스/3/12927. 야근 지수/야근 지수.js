function solution(n, works) {
    // 1.
    works.sort((a, b) => a - b)


    let selectIndex = works.length - 1
    // 2.
    Array.from({ length: n }).forEach(() => {
        works[selectIndex] = works[selectIndex] - 1

        if (works[selectIndex] === 0) { works.pop() }
        // 이전 값이 있을 경우 비교를 한다.
        // 이전 값이 있고 현재 값 보다 클 경우 다음 삭제는 이전 값으로 선택한다.
        if (works[selectIndex - 1] && works[selectIndex] < works[selectIndex - 1]) {
            selectIndex -= 1
            // 이전 값이 없거나 다음 이전 값이 더 작다면 가장 큰 값에서 제외한다.
        } else {
            selectIndex = works.length - 1
        }

    })
    // 3
    return works.reduce((a, b) => a + b ** 2, 0)
}