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
    let min = 0;
    const res = [];

    for (let i = 0; i < n; i++) {
        min = Math.min(...matrix[i]);

        // console.log(min);

        for (let j = 0; j < m; j++) {
            let max = 0;

            for (let k = 0; k < n; k++) {
                // console.log(k + ' k ');
                // console.log(j + ' j ');
                // console.log('🚀 ~ luckyNumbers ~ matrix[i][j]:', matrix[k][j]);

                if (max < matrix[k][j]) {
                    max = matrix[k][j];
                }

                // console.log('🚀 ~ luckyNumbers ~ max:', max);
                // console.log('🚀 ~ luckyNumbers ~ min[i]:', min[k]);
            }

            if (min >= max) {
                res.push(min);
            }
        }
    }

    return res;
};

console.log(luckyNumbers(matrix));
