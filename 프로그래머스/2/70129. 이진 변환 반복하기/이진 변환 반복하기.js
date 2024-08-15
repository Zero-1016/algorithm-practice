function solution(s) {
    let countTransform = 0;
    let countZero = 0;
    
    while (s !== '1'){
        s = s.split('')
        countTransform += 1
        countZero += s.filter((c) => c === '0').length
        s = s.filter((char) => char === '1').length.toString(2);
    }
    
    return [countTransform, countZero]
}