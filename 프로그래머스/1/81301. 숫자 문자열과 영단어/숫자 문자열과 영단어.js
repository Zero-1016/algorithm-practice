const dic = ['zero', 'one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

function solution(s) {
    dic.forEach((val, ind) => {
        s = s.replaceAll(val, ind);
    });
    return Number(s);
}