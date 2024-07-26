/**
Вам даны два массива rowSum и colSum неотрицательных целых чисел, где rowSum[i] — это сумма элементов в i-й строке, а colSum[j] — сумма элементов j-го столбца двумерной матрицы. Другими словами, вы не знаете элементов матрицы, но знаете суммы каждой строки и столбца.
Найдите любую матрицу неотрицательных целых чисел размером rowSum.length x colSum.length, которая удовлетворяет требованиям rowSum и colSum.
Верните двумерный массив, представляющий любую матрицу, соответствующую требованиям. Гарантируется, что существует хотя бы одна матрица, удовлетворяющая требованиям.
 */

let rowSum = [3, 8];
let colSum = [4, 7];

let restoreMatrix = function (rowSum, colSum) {
    let n = rowSum.length;
    let m = colSum.length;

    const currRowSum = Array.from({ length: n }).fill(0);
    const currColSum = Array.from({ length: m }).fill(0);
    const srcMatrix = Array.from({ length: n }, () => Array(m).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            srcMatrix[i][j] = Math.min(
                rowSum[i] - currRowSum[i],
                colSum[j] - currColSum[j],
            );
            currRowSum[i] += srcMatrix[i][j];
            currColSum[j] += srcMatrix[i][j];
        }
    }
    return srcMatrix;
};

console.log(restoreMatrix(rowSum, colSum));
