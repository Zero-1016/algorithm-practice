function solution(n, numlist) {
    return numlist.filter((val,idx)=> val % n === 0);
}