function solution(n, words) {
    const usedWords = new Set();
    let flag = true;
    let count = 0;
    while (flag) {
        usedWords.add(words[count]);
        count++;
        if (usedWords.size !== count) {
            flag = false;
            break;
        }

        if (count === words.length) break;

        if (words[count][0] !== words[count - 1][words[count - 1].length - 1]) {
            count++;
            flag = false;
            break;
        }
    }
    return flag ? [0, 0] : [((count - 1) % n) + 1, Math.ceil(count / n)];
}