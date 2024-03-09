const CAN_WORD = ['aya', 'ye', 'woo', 'ma'];

function solution(babbling) {
    var answer = 0;
    babbling.forEach((element) => {
        let last = '';

        while (true) {
            let prev = element;
            CAN_WORD.forEach((word) => {
                if (word === last) return;

                if (element.startsWith(word)) {
                    element = element.replace(word, ' ');
                    last = word;
                }
            });

            if (!element.includes(' ') || element === prev) break;
            else {
                element = element.trim();
            }
        }
        if (element === '') answer++;
    });
    return answer;
}