function solution(n, money) {
    const dp = Array.from({length: n + 1}, () => 0)
    dp[0] = 1

    for (let m of money) {
        for (let i = 0; i + m <= n; i++) {
            dp[m + i] = dp[m + i] + dp[i]
        }
    }

    return dp[n] %  1_000_000_007;
}