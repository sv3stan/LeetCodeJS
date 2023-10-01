// Даны строки s1, s2 и s3.Определите, образована ли строка s3 чередованием строк s1 и s2.
// Чередование двух строк s и t — это конфигурация, в которой s и t делятся на n и m.
//     подстроки оответственно, такой, что:
// s = s1 + s2 + ... + sn
// т = т1 + т2 + ... + тм
//     | н - м | <= 1
// Перемежение: s1 + t1 + s2 + t2 + s3 + t3 + ... или t1 + s1 + t2 + s2 + t3 + s3 + ...
// Примечание: a + b — это объединение строк a и b.
// 97

s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
s1 = "", s2 = "", s3 = "a"

var isInterleave = function (s1, s2, s3) {
    const lengthS1 = s1.length;
    const lengthS2 = s2.length;
    if (lengthS1 + lengthS2 !== s3.length) return false;
    const dp = Array.from({ length: lengthS1 + 1 }, () => Array(lengthS2 + 1).fill(false));
    dp[0][0] = true;
    for (let i = 1; i <= lengthS1; i++) dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1];
    for (let j = 1; j <= lengthS2; j++) dp[0][j] = dp[0][j - 1] && s2[j - 1] == s3[j - 1];

    for (let i = 1; i <= lengthS1; i++) {
        for (let j = 1; j <= lengthS2; j++) {
            dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]);
        }
    }
    return dp[lengthS1][lengthS2];
};

console.log(isInterleave(s1, s2, s3))





















//var isInterleave = function (s1, s2, s3) {
//     const dp = Array.from({ length: lengthS1 + 1 }, () => Array(lengthS2 + 1).fill(false));

//     dp[0][0] = true;
//     for (let i = 1; i <= lengthS1; i++) {
//         // console.log(s1[i - 1] + ' - s1[i-1] - ' + s3[i - 1] + ' - s3[i-1] - ')
//         dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1]
//     }

//     for (let j = 1; j <= lengthS2; j++) {
//         console.log(s2[j - 1] + ' - s1[i-1] - ' + s3[j - 1] + ' - s3[i-1] - ')
//         dp[0][j] = dp[0][j - 1] && s2[j - 1] == s3[j - 1]
//     }

//     console.log(dp)

//     for (let i = 1; i <= lengthS1; i++) {
//         for (let j = 1; j <= lengthS2; j++) {
//             dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]);
//         }
//     }
//     console.log(dp)
//     //  const dp = Array.from({ length: lengthS1 + 1 }, () => Array(lengthS2 + 1).fill(false));

//     // dp[0][0] = true;
//     // for (let i = 1; i <= lengthS1; i++) {
//     //     dp[i][0] = dp[i - 1][0] && s1[i - 1] == s3[i - 1];
//     // }

//     // for (let j = 1; j <= lengthS2; j++) {
//     //     dp[0][j] = dp[0][j - 1] && s2[j - 1] == s3[j - 1];
//     // }

//     // for (let i = 1; i <= lengthS1; i++) {
//     //     for (let j = 1; j <= lengthS2; j++) {
//     //         dp[i][j] = (dp[i - 1][j] && s1[i - 1] == s3[i + j - 1]) || (dp[i][j - 1] && s2[j - 1] == s3[i + j - 1]);
//     //     }
//     // }

//     return dp[lengthS1][lengthS2];
// };
