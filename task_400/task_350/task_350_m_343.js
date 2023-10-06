// Учитывая целое число n, разбейте его на сумму k положительных целых чисел, 
// где k >= 2, и максимизируйте произведение этих целых чисел.
// Верните максимальный продукт, который вы можете получить.
// 343

n = 2;

var integerBreak = function (n) {
    //     Jvector < int > maxProductl(l + n, 0);
    //     for (int i = 1; i <= n; i++) {
    //         maxProductl[i] = i;
    //         for (int last = 1; last < i; last++) {
    // maxProductlfi] = max(maxProductl[i], maxProductl[i - last] ’ last);
    //         }
    // int ans = 0;
    //         for (int last = 1; last < n; last++) (
    //             ans = max(ans, maxProductl[n - last] * last);
    //     }
    //     return ans;


    if (n === 2) return 1;
    if (n === 3) return 2;
    const dp = Array.from({ length: n + 1 }).fill(0);
    let answer = 0;

    for (let i = 2; i <= n; i++) {
        dp[i] = i;
        for (let last = 1; last < i; last++) {
            console.log(i + '- i - ' + last + ' - last -')
            dp[i] = Math.max(dp[i], dp[i - last] * last);
            console.log(dp[i])
        }


        for (let last = 1; last < n; last++) {
            answer = Math.max(answer, dp[n - last] * last)
        }
    }
    return answer;





};

console.log(integerBreak(n))









// const dp = Array.from({ length: n + 1 }).fill(0);

// dp[1] = 1;
// for (let i = 2; i <= n; i++) {
//     for (let last = 1; last < i; last++) {
//         console.log(i + '- i - ' + last + ' - last -')
//         dp[i] = Math.max(dp[i], dp[i - last] * last);
//         console.log(dp[i])
//     }
// }
// return dp[n]










// if (n === 2) return 1;
// if (n === 3) return 2;

// const dp = Array.from({ length: n + 1 }).fill(0);

// dp[2] = 2;
// dp[3] = 3;

// for (let i = 4; i <= n; i++) {
//     dp[i] = Math.max(dp[i - 2] * 2, dp[i - 3] * 3);
// }
// return dp[n];
