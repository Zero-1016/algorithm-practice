function solution(my_string, is_suffix) {
    const answer = []

    my_string.split('').forEach((value, index) => {
        answer.push(my_string.substring(index, my_string.length))
    })
    return answer.includes(is_suffix) ? 1 : 0;
}
