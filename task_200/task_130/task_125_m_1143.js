// Имея две строки text1 и text2, вернуть длину их самой длинной общей подпоследовательности.
// Если нет общей подпоследовательности, вернуть 0.
// Подпоследовательность строки — это новая строка, сгенерированная из исходной строки с 
// удалением некоторых символов(может не быть ни одного) без изменения относительного порядка оставшихся символов.
// Например, «ace» является продолжением «abcde».
// Общая подпоследовательность двух строк — это подпоследовательность, общая для обеих строк.
// 1143


text1 = "abcde";
text2 = "ace";

text1 = "abacaba";
text2 = "abcab";
text1 = "abc";
text2 = "abc";


function longestCommonSubsequence(text1, text2) {
    const m = text1.length;
    const n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    console.log(dp)
    for (let i = 1; i <= text1.length; i++) {
        console.log(' --------- ')
        for (let j = 1; j <= text2.length; j++) {
            console.log(text1[i - 1] + ' - text1[i - 1]- ' + text2[j - 1] + ' - text2[j - 1] - ')
            if (text1[i - 1] === text2[j - 1]) {
                console.log(' +++++++++ ')
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                console.log(' ============ ')
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
            console.log(dp)
        }
    }

    console.log(dp)
    return dp[m][n]
};

console.log(longestCommonSubsequence(text1, text2))