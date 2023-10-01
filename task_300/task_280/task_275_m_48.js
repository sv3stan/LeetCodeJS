// Вам дана двумерная матрица размера length x length, представляющая изображение.
// Поверните изображение на 90 градусов(по часовой стрелке).
// Вам необходимо повернуть изображение на месте, а это значит, 
// что вам придется напрямую изменить входную 2D - матрицу.
// НЕ выделяйте еще одну 2D - матрицу и не выполняйте вращение.
// 48





matrix = [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]

var rotate = function (matrix) {
    const length = matrix.length;

    for (let i = 0; i < length / 2; i++) {
        for (let j = i; j < length - i - 1; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[length - j - 1][i];
            matrix[length - j - 1][i] = matrix[length - i - 1][length - j - 1];
            matrix[length - i - 1][length - j - 1] = matrix[j][length - i - 1];
            matrix[j][length - i - 1] = temp;
        }
    }
    return matrix;
};


console.log(rotate(matrix))