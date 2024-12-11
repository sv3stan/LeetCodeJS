/**
You are given an n x n integer matrix.You can do the following operation any number of times: Choose any two adjacent elements of matrix and multiply each of them by -1. Two elements are considered adjacent if and only if they share a border. Your goal is to maximize the summation of the matrix's elements.Return the maximum sum of the matrix's elements using the operation mentioned above.
Вам дана целочисленная матрица размера n x n. Вы можете выполнить следующую операцию любое количество раз: Выберите любые два соседних элемента матрицы и умножьте каждый из них на -1. Два элемента считаются соседними тогда и только тогда, когда они имеют общую границу. Ваша цель — максимизировать суммирование элементов матрицы. Верните максимальную сумму элементов матрицы, используя операцию, упомянутую выше.
 */

let matrix = [
    [1, 2, 3],
    [-1, -2, -3],
    [1, 2, 3],
];

function maxMatrixSum(matrix: number[][]): number {
    let res = 0;
    let cnt = 0;
    let min = Infinity;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let num = matrix[i][j];
            res += Math.abs(num);
            if (num < 0) {
                cnt++;
            }
            min = Math.min(min, Math.abs(num));
        }
    }

    if (cnt % 2 === 0) {
        return res;
    } else {
        return res - 2 * min;
    }
}

console.log(maxMatrixSum(matrix));
