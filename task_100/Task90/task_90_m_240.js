// Напишите эффективный алгоритм, который ищет целевое значение в целочисленной матрице размера m x n.
// Эта матрица обладает следующими свойствами:
// Целые числа в каждой строке сортируются по возрастанию слева направо.
// Целые числа в каждом столбце сортируются по возрастанию сверху вниз.
// 240

matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]];
target = 5;

function searchMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
            return true
        } else {
            if (matrix[row][col] > target) {
                col--;
            } else {
                row++;
            }
        }
    }
    return false;
};

console.log(searchMatrix(matrix, target));