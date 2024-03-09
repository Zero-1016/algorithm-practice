function solution(keymap, targets) {
    let keyboards = new Array();
    let keyboard_can_word = new Set();
    for (let keyboard of keymap) {
        let keys = new Map();
        for (let i = 0; i < keyboard.length; i++) {
            if (keys.has(keyboard[i])) continue;
            keys.set(keyboard[i], i + 1);
            keyboard_can_word.add(keyboard[i]);
        }
        keyboards.push(keys);
    }
    var answer = [];

    for (let target of targets) {
        let temp = true;
        let count = 0;
        for (let key of target) {
            if (!keyboard_can_word.has(key)) {
                temp = false;
                break;
            }

            let touchCount = Math.min(...keyboards.filter((val) => val.has(key)).map((v) => v.get(key)));
            count += touchCount;
        }
        answer.push(!temp ? -1 : count);
    }

    return answer;
}