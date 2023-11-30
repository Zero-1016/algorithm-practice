function solution(q, r, code) {
    return code.split('').filter((val, ind)=> ind % q === r).join('');
}