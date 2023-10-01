// Имея две строки word1 и word2, верните минимальное количество операций, необходимых для преобразования word1 в word2.
// Над словом разрешены следующие три операции:
// Вставить символ
// Удалить символ
// Заменить символ
// 72

word1 = "horse", word2 = "ros"
//word1 = "intention", word2 = "execution"

function minDistance(word1, word2) {
    const l1 = word1.length;
    const l2 = word2.length;
    const dp = Array.from({ length: l2 + 1 }, () => Array(l1 + 1).fill(1))
    dp[0][0] = 0
    for (let i = 0; i <= l1; i++) dp[0][i] = i
    for (let i = 1; i <= l2; i++) dp[i][0] = i
    for (let i = 1; i <= l2; i++) {
        const char2 = word2[i - 1];
        for (let j = 1; j <= l1; j++) {
            const char1 = word1[j - 1];
            if (char1 !== char2) {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
            } else {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    return dp[l2][l1]
};

console.log(minDistance(word1, word2))















//function minDistance(word1, word2) {

//     const l1 = word1.length;
//     const l2 = word2.length;

//     const dp = Array.from({ length: l2 + 1 }, () => Array(l1 + 1).fill(1))
//     dp[0][0] = 0
//     for (let i = 0; i <= l1; i++) dp[0][i] = i
//     for (let i = 1; i <= l2; i++) dp[i][0] = i
//     console.log(dp)

//     for (let i = 1; i <= l2; i++) {
//         //   console.log(i)
//         console.log(' +++++++++++  ')
//         for (let j = 1; j <= l1; j++) {
//             console.log(' -------------  ')
//             console.log(dp[i][j] + ' -- ' + i + ' - i - ' + j + ' - j - ')
//             console.log(word1[j - 1] + ' - word1[i - 1] - ' + word2[i - 1] + ' - word2[j - 1] - ')
//             if (word1[j - 1] != word2[i - 1]) {

//                 dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]) + 1;
//             } else {
//                 console.log('!!!!!!!!!!!!!!')
//                 dp[i][j] = dp[i - 1][j - 1];

//             }
//             console.log(dp)
//         }
//     }

//     console.log(dp)
// };