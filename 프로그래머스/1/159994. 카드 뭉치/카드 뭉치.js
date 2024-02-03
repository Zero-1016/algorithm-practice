function solution(cards1, cards2, goal) {
    cards1.reverse();
    cards2.reverse();
    const result = [];
    
    while (result.length !== goal.length) {
        if (cards1.length > 0 && cards1[cards1.length - 1] === goal[result.length]) {
            result.push(cards1.pop());
        } else if (cards2.length > 0 && cards2[cards2.length - 1] === goal[result.length]) {
            result.push(cards2.pop());
        } else {
            break;
        }
    }
    
    return result.length === goal.length ? "Yes" : "No";
}