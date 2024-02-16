function solution(skill, skill_trees) {
    var answer = 0;
    for (let sk of skill_trees) {
        let temp = true
        const checked = [...skill].reverse()
        for (let i = 0; i < sk.length && temp; i++) {
            if (checked.includes(sk[i])) {
                if (checked[checked.length - 1] === sk[i]) {
                    checked.pop()
                } else {
                    temp = false
                }
            }
        }

        if (temp) {
            answer++
        }
    }
    return answer;
}