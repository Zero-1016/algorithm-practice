function solution(sequence, k) {
    var answer = [];
    let prefix = [0];
    let maxL = Infinity;
    sequence.forEach((num, i) => {
        prefix.push(num + prefix[i]);
    });

    let left = 0;
    let right = 0;

    while (left <= right) {
        let sum = prefix[right] - prefix[left];
        if (sum === k) {
            let nowL = right - 1 - left;
            if (maxL > nowL) {
                answer = [left, right - 1];
                maxL = nowL;
            }
        }

        sum < k ? right++ : left++;
    }
    return answer;
}