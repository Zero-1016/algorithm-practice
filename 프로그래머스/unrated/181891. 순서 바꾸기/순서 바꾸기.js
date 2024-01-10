function solution(num_list, n) {
    for(let i = 0; i < n; i++){
        num_list.push(num_list.shift())
    }
    return num_list;
}