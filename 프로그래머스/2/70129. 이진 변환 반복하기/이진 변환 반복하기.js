function solution(s) {
    let count = 0;
    let delete_zero_count = 0;
    let s_string = s;
    while (true && count < 10) {
        if (s_string === '1') break;
        const prev_count = s_string.length
        s_string = s_string.replaceAll('0', '');
        delete_zero_count += prev_count - s_string.length
        s_string = s_string.length.toString(2)
        count += 1;
    }
    return [count, delete_zero_count];
}