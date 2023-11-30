function solution(my_string, m, c) {
    var answer = '';
    my_string.split('').forEach((value,index) => {
        if(index % m + 1 === c){
            answer += my_string[index]
        }
    })
    return answer;
}