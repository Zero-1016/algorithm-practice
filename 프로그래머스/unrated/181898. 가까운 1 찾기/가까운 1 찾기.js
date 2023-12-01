function solution(arr, idx) {
    return  arr.findIndex((value, index)=> index > idx-1 && value === 1);
}