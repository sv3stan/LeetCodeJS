// Последовательность Трибоначчи Tn определяется следующим образом:
// T0 = 0, T1 = 1, T2 = 1 и Tn + 3 = Tn + Tn + 1 + Tn + 2 для n >= 0.
// Учитывая n, вернуть значение Tn.
// 1137

n = 25;
function tribonacci(n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    const dp = [0, 1, 1];

    for (let i = 3; i <= n; i++) {
        dp[i % 3] = dp[(i - 1) % 3] + dp[(i - 2) % 3] + dp[(i - 3) % 3];

        console.log(dp)
    }
    console.log(dp)
    return dp[n % 3];

};


console.log(tribonacci(n))