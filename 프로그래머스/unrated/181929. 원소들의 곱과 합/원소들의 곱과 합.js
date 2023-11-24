function solution(num_list) {
    let num = num_list.reduce((a, b)=> a + b, 0)** 2;
    let mul = num_list.reduce((a, b)=> a * b, 1);
    return mul > num  ? 0 : 1;
}