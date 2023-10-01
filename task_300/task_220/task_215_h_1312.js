// Дана строка s.За один шаг вы можете вставить любой символ в любой индекс строки.
// Возвращает минимальное количество шагов, чтобы составить палиндром.
// Строка - палиндром — это строка, которая читается одинаково как вперед, так и назад.
// 1312

s = "mbadm";//2 "mbdadbm" or "mdbabdm"
s = "leetcode";  //5 "leetcodocteel" 

var minInsertions = function (s) {
    // const length = s.length - 1;
    // const dp = Array.from({ length: length + 1 }, () => Array(length + 1).fill(0));
    // for (let i = length - 1; i > 0; i--) {
    //     //console.log(dp)
    //     for (let j = i; j <= length; j++) {
    //         //console.log(dp)
    //         if (s[i] == s[j]) {
    //             dp[i][j] = dp[i + 1][j - 1];
    //         } else {
    //             dp[i][j] = Math.min(dp[i + 1][j] + 1, dp[i][j - 1] + 1, dp[i + 1][j - 1] + 1)
    //         }
    //     }
    // }
    // console.log(dp)
    // return dp[0][length]


    const length = s.length;
    const dp = Array.from({ length: length }, () => Array(length).fill(0));

    for (let i = length - 2; i >= 0; i--) {
        for (let j = i + 1; j < length; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;

            }
        }
    }
    console.log(dp)
    return dp[0][length - 1];
};

console.log(minInsertions(s)) 