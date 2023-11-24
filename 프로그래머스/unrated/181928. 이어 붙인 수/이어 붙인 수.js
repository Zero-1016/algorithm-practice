function solution(num_list) {
    let 홀수 = "";
    let 짝수 = "";
    num_list.forEach((value, index)=> value % 2 == 0 ? 홀수 += String(value) : 짝수 += String(value))
    return Number(홀수) + Number(짝수);
}