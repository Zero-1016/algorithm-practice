function combinations(arr, n) {
    // 1개만 뽑는다면 그대로 조합을 반환하며 탈출 조건으로도 이용
    if (n === 1) return arr.map((v)=>[v])
    const result = []

    // 요소를 순환
    arr.forEach((fixed, idx, arr) => {
        // 현재 index 이후 요소를 추출
        // index번째는 선택된 요소
        const rest = arr.slice(idx + 1)
        // 선택된 요소와 이전 요소들을 제외하고 호출
        const combis = combinations(rest, n - 1)
        // 선택된 요소와 재귀 호출을 통해 구한 조합을 합침
        const combine = combis.map((v) => [fixed, ...v])
        // 결과 값을 추가
        result.push(...combine)
    })

    return result
}
