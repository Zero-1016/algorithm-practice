const VOWEL = ["A", "E", "I", "O", "U"];

function solution(word) {
    const dic = [];

    function bfs(word, count) {
        if (count === 6) return;
        
        dic.push(word);

        VOWEL.forEach((val) => {
            bfs(word + val, count + 1);
        });
    }

    VOWEL.forEach((val) => {
        bfs(val, 1);
    });

    dic.sort();

    return dic.findIndex(val => val === word) + 1;
}