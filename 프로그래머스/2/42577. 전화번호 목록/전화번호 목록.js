function solution(phone_book) {
    var answer = true;
    let count = 0;
    let sort_array = phone_book.sort()

    if (new Set(phone_book).size !== sort_array.length) return false

    while (answer && count < phone_book.length - 1) {
        if (sort_array[count + 1].substring(0, sort_array[count].length)?.includes(sort_array[count])) return false
        count++;
    }
    return answer;
}