/**
Учитывая матрицу m x n различных чисел, верните все счастливые числа в матрице в любом порядке.
Счастливое число — это такой элемент матрицы, который является минимальным элементом в своей строке и максимальным в своем столбце.
 */

let matrix = [
    [1, 10, 4, 2],
    [9, 3, 8, 7],
    [15, 16, 17, 12],
];

let luckyNumbers = function (matrix) {
    const m = matrix[0].length;
    const n = matrix.length;
    const res = [];

    for (let i = 0; i < m; i++) {
        let min = Math.min(...matrix[i]);
        let max = 0;
        for (let j = 0; j < n; j++) {
            if (max < matrix[j][i]) {
                max = matrix[j][i];
            }

            if (min > max) {
                res.push(min);
            }
        }
    }

    return res;
};

console.log(luckyNumbers(matrix));
