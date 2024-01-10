function solution(num_list) {
    let a = 0
    let b = 0

    num_list.forEach((element, index) => {
        if (index % 2 === 1) {
            a += element
        } else {
            b += element
        }
    });

    return Math.max(a, b);
}