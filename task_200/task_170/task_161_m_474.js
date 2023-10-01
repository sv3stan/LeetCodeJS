// Вам дан массив двоичных строк strs и два целых числа m и n.
// Возвращает размер наибольшего подмножества строк так, чтобы в подмножестве было не более m нулей и n единиц.
// Множество x является подмножеством множества y, если все элементы x также являются элементами y.
// 474


strs = ["10", "0001", "111001", "1", "0"];
m = 5;
n = 3;
strs = ["10", "0", "1"], m = 1, n = 1
strs = ["00", "000"], m = 1, n = 10
strs = ["10", "0001", "111001", "1", "0"], m = 3, n = 4
var findMaxForm = function (strs, m, n) {

    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    dp[0][0] = 0;

    for (const str of strs) {

        let sumZero = 0;
        let sumOnes = 0;

        for (const ch of str) {
            if (ch === '0') {
                sumZero++;
            } else {
                sumOnes++;
            }
        }

        for (let i0 = m; i0 >= sumZero; i0--) {
            for (let i1 = n; i1 >= sumOnes; i1--) {
                console.log(dp[i0][i1] + ' - dp[i0][i1] - ' + dp[i0 - sumZero][i1 - sumOnes] + ' - dp[i0 - sumZero][i1 - sumOnes]- ')
                dp[i0][i1] = Math.max(dp[i0][i1], dp[i0 - sumZero][i1 - sumOnes] + 1);
                //console.log(dp)
            }
        }

    }
    console.log(dp)

    return dp[m][n];


};

console.log(findMaxForm(strs, m, n))