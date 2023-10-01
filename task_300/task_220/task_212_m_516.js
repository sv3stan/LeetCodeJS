// Учитывая строку s, найдите длину самой длинной палиндромной подпоследовательности в s.
// Подпоследовательность — это последовательность, которую можно получить из другой 
// последовательности путем удаления некоторых элементов или их отсутствия без изменения порядка остальных элементов.
// 516

s = "bbbab";
s = "cbbd"

var longestPalindromeSubseq = function (s) {

    const length = s.length;

    const dp = Array.from({ length: length }, () => Array(length).fill(0));

    for (let i = 1; i <= length; i++) {
        for (let left = 0, right = i - 1; right < length; left++, right++) {
            if (i == 1) {
                dp[left][right] = 1;
            } else if (i == 2) {
                if (s[left] === s[right]) {
                    dp[left][right] = 2;
                } else {
                    dp[left][right] = 1;
                }
            } else {
                if (s[left] === s[right]) {
                    dp[left][right] = 2 + dp[left + 1][right - 1]
                } else {
                    dp[left][right] = Math.max(dp[left][right - 1], dp[left + 1][right])
                }
            }
        }
    }



    console.log(dp)
    return dp[0][length - 1]

};


console.log(longestPalindromeSubseq(s))