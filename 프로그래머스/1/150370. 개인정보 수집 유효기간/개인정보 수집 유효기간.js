function solution(today, terms, privacies) {
    var answer = [];
    const termsMap = new Map();
    for (const term of terms) {
        const [name, day] = term.split(' ');
        termsMap.set(name, parseInt(day));
    }
    const todayDate = new Date(today);

    for (let i = 0; i < privacies.length; i++) {
        const [date, name] = privacies[i].split(' ');
        const privacyDate = new Date(date);
        privacyDate.setMonth(privacyDate.getMonth() + termsMap.get(name))
        privacyDate.setDate(Math.min(privacyDate.getDate(), 28))
        if (privacyDate <= todayDate) {
            answer.push(i + 1);
        }
    }
    return answer;
}
