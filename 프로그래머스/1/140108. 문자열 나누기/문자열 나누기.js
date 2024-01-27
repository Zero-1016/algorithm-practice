function solution(s) {
    var answer = 0;
    let x = ""
    let x_count = 0;
    let y_count = 0;
    for(let i = 0; i < s.length ; i++){
        if(x === "") x = s[i]

        if(x === s[i]) ++x_count;
    
        if(x !== s[i]) ++y_count;

        if(x_count >= 1 && x_count === y_count) {
            answer++
            x = ""
            x_count = 0;
            y_count = 0;
        }
    }
    return x !== "" ? answer + 1 : answer;
}