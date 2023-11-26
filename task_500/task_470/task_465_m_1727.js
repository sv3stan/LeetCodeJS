// Вам дана двоичная матрица размером m x n, и вам 
// разрешено переставлять столбцы матрицы в любом порядке.
// Возвращает площадь наибольшей подматрицы в матрице, 
// где каждый элемент подматрицы равен 1 после оптимального 
// изменения порядка столбцов.
// 1727


matrix = [[0, 0, 1], [1, 1, 1], [1, 0, 1]]
//matrix = [[1, 0, 1, 0, 1]]
//matrix = [[1, 1, 0], [1, 0, 1]]

var largestSubmatrix = function (matrix) {

    const m = matrix.length;
    const n = matrix[0].length;
    let answer = 0;

    for (let i = 1; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
    }


    matrix.forEach(row => {
        row.sort((a, b) => b - a);
        for (let j = 0, k = 1; j < n && row[j] > 0; ++j, ++k) {
            const square = row[j] * k;
            answer = Math.max(answer, square);
        }
    });

    return answer;

};

console.log(largestSubmatrix(matrix))