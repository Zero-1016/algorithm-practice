function solution(n) {
    let dp = new Array();
    dp[0] = 1;
    dp[1] = 1;
    if (n <= 1) return 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
    }

    return dp[n];
}