// Учитывая две строки s и t, верните количество различных подпоследовательностей s, равное t.
// Тестовые примеры генерируются таким образом, чтобы ответ соответствовал 32 - битному целому числу со знаком.
// 115

s = "rabbbit", t = "rabbit"
s = "babgbag", t = "bag"


var numDistinct = function (s, t) {
    const m = s.length;
    const n = t.length;
    const dp = Array.from({ length: n + 1 }).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= m; i++) {
        for (let j = t.length; j >= 1; j--) {
            console.log(s[i - 1] + ' -s[i - 1]- ' + t[j - 1] + ' - t[j - 1]')
            if (s[i - 1] === t[j - 1]) {
                console.log('if if if ')
                dp[j] += dp[j - 1];

            }
            console.log(dp)
        }
    }
    return dp[n];
};


console.log(numDistinct(s, t));