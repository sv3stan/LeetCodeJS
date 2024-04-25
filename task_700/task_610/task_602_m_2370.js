/*
Вам дана строка s, состоящая из строчных букв и целого числа k. Назовем струну t идеальной, если выполняются следующие условия:

t является подпоследовательностью строки s.
Абсолютная разница в порядке алфавита каждых двух соседних букв в t меньше или равна k.
Возвращает длину самой длинной идеальной строки.

Подпоследовательность — это строка, которую можно получить из другой строки путем удаления некоторых символов или отсутствия их без изменения порядка оставшихся символов.

Обратите внимание, что порядок алфавита не является циклическим. Например, абсолютная разница в алфавитном порядке букв «a» и «z» равна 25, а не 1.
*/

// 2370

let s = 'acfgbd';
let k = 2;

let longestIdealString = function (s, k) {
    const length = s.length;
    const alphabetLength = 26;

    // Initialize dp table with -1
    const dp = Array.from({ length: length })
        .fill(null)
        .map(() => Array.from({ length: alphabetLength }).fill(-1));

    // Recursive function to update dp and find the maximum length of ideal substring
    function dfs(i, prevChar) {
        if (i === length) return 0; // Base case: reached end of string
        if (dp[i][prevChar] !== -1) return dp[i][prevChar]; // Memoization

        // Option 1: Not including current character in ideal substring
        let maxLength = dfs(i + 1, prevChar);

        // Option 2: Including current character in ideal substring
        const currentChar = s.charCodeAt(i) - 'a'.charCodeAt(0);
        if (Math.abs(currentChar - prevChar) <= k) {
            maxLength = Math.max(maxLength, dfs(i + 1, currentChar) + 1);
        }

        // Memoize the result and return
        dp[i][prevChar] = maxLength;

        return maxLength;
    }

    // Find maximum length of ideal substring starting from each possible character
    let maxSubstringLength = 0;
    for (let startChar = 0; startChar < alphabetLength; startChar++) {
        maxSubstringLength = Math.max(maxSubstringLength, dfs(0, startChar));
    }

    return maxSubstringLength;
};

console.log(longestIdealString(s, k));
