// Дана бинарная матрица размера m x n, заполненная нулями и единицами, 
// найти самый большой квадрат, содержащий только единицы, и вернуть его площадь.
// 221
matrix = [["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]
//matrix = [["0", "1"], ["1", "0"]]

function maximalSquare(matrix) {
    const m = matrix[0].length;
    const n = matrix.length;
    let maxSize = 0;
    for (let i = 0; i < n; i++) {
        maxSize = Math.max(maxSize, matrix[i][0]);
    }

    for (let j = 0; j < m; j++) {
        maxSize = Math.max(maxSize, matrix[0][j]);
    }


    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            if (matrix[i][j] == 1) {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i][j - 1], matrix[i - 1][j]) + 1;
                maxSize = Math.max(maxSize, matrix[i][j]);
            }
        }
    }
    return maxSize * maxSize;

};


console.log(maximalSquare(matrix))