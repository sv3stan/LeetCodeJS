// Для целочисленного массива nums обратная пара — 
// это пара целых чисел[i, j], где 0 <= i < j < nums.length и nums[i] > nums[j].
// Учитывая два целых числа n и k, верните количество различных массивов, 
// состоящих из чисел от 1 до n, таких, что существует ровно k обратных пар.
// Поскольку ответ может быть огромным, верните его по модулю 109 + 7.

// 629

n = 3, k = 1

var kInversePairs = function (n, k) {

    let mod = 1000 * 1000 * 1000 + 7;

    if (k > n * (n - 1) / 2 || k < 0) return 0;

    let dp = Array.from({ length: n + 1 }, () => Array.from({ length: k + 1 }).fill(0));

    for (let i = 1; i <= n; i++) {
        dp[i][0] = 1;
        if (i + 1 <= n) {
            dp[i + 1][0] = 1;
        }
        for (let j = 1; j <= Math.min(k, i * (i - 1) / 2); j++) {
            dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
            if (j >= i) {
                dp[i][j] -= dp[i - 1][j - i];
            }
            dp[i][j] = (dp[i][j] + mod) % mod;
        }
    }
    return dp[n][k];

};


console.log(kInversePairs(n, k))

