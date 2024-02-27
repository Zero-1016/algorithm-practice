function solution(n, k) {
    var answer = [];
    let user = new Array(n).fill('').map((v, i) => i + 1)
    let fact = [1];
    for (let i = 1; i <= n; i++) fact[i] = fact[i - 1] * i;
    while (user.length) {
        let temp = fact[n - 1];
        let index = 0;
        while (temp < k) {
            index++;
            temp += fact[n - 1];
        }
        k -= (temp - fact[n - 1]);
        n--;
        answer.push(user[index]);
        user.splice(index, 1);
    }
    return answer
}