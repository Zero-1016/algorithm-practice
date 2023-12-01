function solution(my_string, indices) {
    return my_string.split('').filter((val, index)=> !indices.includes(index)).join('');
}