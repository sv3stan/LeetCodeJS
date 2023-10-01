// Учитывая матрицу размера m x n, верните все элементы матрицы в спиральном порядке.
// 201

matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }

    const result = [];
    let firstRow = 0;
    let lastRow = matrix.length - 1;
    let firstColumn = 0;
    let lastColumn = matrix[0].length - 1;

    while (firstRow <= lastRow && firstColumn <= lastColumn) {
        for (let i = firstColumn; i <= lastColumn; i++) {
            result.push(matrix[firstRow][i]);
        }
        firstRow++;
        for (let i = firstRow; i <= lastRow; i++) {
            result.push(matrix[i][lastColumn]);
        }
        lastColumn--;
        if (firstRow <= lastRow && firstColumn <= lastColumn) {
            for (let i = lastColumn; i >= firstColumn; i--) {
                result.push(matrix[lastRow][i]);
            }
            lastRow--;
            for (let i = lastRow; i >= firstRow; i--) {
                result.push(matrix[i][firstColumn]);
            }
            firstColumn++;
        }
    }

    return result;
};

console.log(spiralOrder(matrix));
