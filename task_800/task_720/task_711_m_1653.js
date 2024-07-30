/*
Вам дана строка s, состоящая только из символов «a» и «b».
Вы можете удалить любое количество символов в s, чтобы сделать s сбалансированным. s сбалансирован, если не существует пары индексов (i,j) такой, что i < j и s[i] = 'b' и s[j]= 'a'.
Возвращает минимальное количество удалений, необходимое для балансировки s.
 */

s = 'aababbab';

let minimumDeletions = function (s) {
    const n = s.length;
    const dp = Array.from({ length: n + 1 }, () => 0);

    let b_cnt = 0;

    for (let i = 0; i < n; i++) {
        if (s[i] == 'b') {
            dp[i + 1] = dp[i];
            b_cnt++;
        } else {
            dp[i + 1] = Math.min(dp[i] + 1, b_cnt);
        }
    }

    return dp[n];
};

console.log(minimumDeletions(s)); // Output: 2
