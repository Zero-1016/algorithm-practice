function solution(n) {
    const char = [1, 2, 4];
    var answer = '';

    switch (n) {
        case 1:
            return '1';
        case 2:
            return '2';
        case 3:
            return '4';
    }

    while (n > 0) {
        answer = String(char[(n-1) % 3]) + answer;
        n = Math.floor((n-1) / 3);
    }

    return answer;
}