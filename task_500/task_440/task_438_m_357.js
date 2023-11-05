// Учитывая целое число n, верните количество всех чисел 
// с уникальными цифрами x, где 0 <= x < 10n.
// 357

n = 2;

var countNumbersWithUniqueDigits = function (n) {

    // const dp = Array.from({ length: n + 1 }).fill(0);
    // dp[0] = 1;
    // //dp[1] = 10;
    // //  dp[2] = 91;
    // for (let i = 1; i < 10; i++) {
    //     let count = 9;
    //     let answer = 9;
    //     for (let j = 0; j < i; j++) {
    //         answer *= count;
    //         count--;
    //     }
    //     dp[i] = dp[i - 1] + answer;
    // }
    // return dp[n]


    if (n === 0) return 1;
    const dp = Array.from({ length: n }).fill(0);
    dp[0] = 1;
    const temp = [9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i - 1];
        let res = 1;
        for (let j = 0; j < i; j++) res = res * temp[j];
        dp[i] += res;
    }
    return dp[n];


};

console.log(countNumbersWithUniqueDigits(n))