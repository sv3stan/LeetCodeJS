// Учитывая две строки s1и  s2, верните наименьшую сумму удаленных символов ASCII, чтобы сделать две строки равными.
// 712

s1 = 'delete';
s2 = 'leet';

var minimumDeleteSum = function (s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const answer = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = m - 1; i >= 0; i--) {
        answer[i][n] = answer[i + 1][n] + s1.charCodeAt(i);
    }
    for (let j = n - 1; j >= 0; j--) {
        answer[m][j] = answer[m][j + 1] + s2.charCodeAt(j);
    }

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (s1[i] === s2[j]) {
                answer[i][j] = answer[i + 1][j + 1];
            } else {
                answer[i][j] = Math.min(answer[i + 1][j] + s1.charCodeAt(i), answer[i][j + 1] + s2.charCodeAt(j));
            }
        }
    }

    return answer[0][0];


};

console.log(minimumDeleteSum(s1, s2))

















// if (prefix1 == 0 && prefix2 == 0) {
            //     answer[prefix1][prefix2] = 0;
            // } else if (prefix1 == 0) {
            //     answer[prefix1][prefix2] = answer[prefix1][prefix2 - 1] + s2[prefix2 - 1];
            // } else if (prefix2 == 0) {
            //     answer[prefix1][prefix2] = answer[prefix1 - 1][prefix2] + s1[prefix1 - 1]
            // } else {
            //     if (s1[prefix1 - 1] == s2[prefix2 - 1]) {
            //         answer[prefix1][prefix2] = answer[prefix1 - 1][prefix2 - 1]
            //     } else {
            //         answer[prefix1][prefix2] = Math.min(answer[prefix1][prefix2 - 1] + s2[prefix2 - 1], answer[prefix1 - 1][prefix2] + s1[prefix1 - 1]);
            //     }
            // }