function solution(people, limit) {
    var answer = 0;
    const sortArray = people.sort((a, b) => a - b);
    while (sortArray.length !== 0) {
        let sum = 0;
        sum += sortArray.pop();
        let temp = true;
        while (temp) {
            if (sortArray[0] + sum > limit || sortArray.length === 0) {
                answer++;
                temp = false;
            }else{
                sum += sortArray.shift();
                answer++;
                temp = false;
            }
        }
    }
    return answer;
}