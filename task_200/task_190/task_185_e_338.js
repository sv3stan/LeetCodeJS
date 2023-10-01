// Учитывая целое число n, верните массив ans длины n + 1 такой, 
// что для каждого i(0 <= i <= n) ans[i] — это количество единиц в двоичном представлении i.
// 338


n = 16;

var countBits = function (n) {

    const dp = Array.from({ length: n + 1 }).fill(0);


    for (let i = 1; i <= n; i++) {
        console.log(dp[i])
        dp[i] = dp[i >> 1] + (i & 1)
        console.log(dp[i])
    }

    return dp


};

console.log(countBits(n))