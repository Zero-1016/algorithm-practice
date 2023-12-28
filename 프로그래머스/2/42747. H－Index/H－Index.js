function solution(citations) {
    citations.sort((a, b) => b - a)
    let HIndex = 0;
    let MinVal = 0;
    for (let i = 0; i <= citations.length; i++) {
        MinVal++
        let CurrVal = citations[i];
        if (MinVal <= CurrVal){
            HIndex = MinVal;
        } else {
            break;
        }
    }
    return HIndex;
}