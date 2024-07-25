function solution(s) {
    let answer = 0;

    const lastIndex = s.length - 1;

    const bracket = {
        "{": "}",
        "(": ")",
        "[": "]"
    }

    for (let i = 0; i < s.length; i++) {
        let stack = [];
        let isCorrect = true;

        for (let j = 0; j < s.length; j++) {
            const item = s[j]
            if (bracket.hasOwnProperty(item)) {
                stack.push(item);
            } else {
                const openBracket = stack.pop();
                if (bracket[openBracket] !== item) {
                    isCorrect = false;
                    break;
                }
            }

            if(lastIndex === j) {
                if(stack.length !== 0) {
                    isCorrect = false;
                }
            }
        }
        if (isCorrect) {
            answer += 1;
        }

        s = s.slice(1) + s[0];
    }

    return answer;
}