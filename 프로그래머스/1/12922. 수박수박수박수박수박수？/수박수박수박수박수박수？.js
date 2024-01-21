function solution(n) {
    return new Array(n).fill('').map((_,ind)=>ind % 2 !== 0 ? "박" : "수").join('');
}