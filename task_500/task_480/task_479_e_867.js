// Учитывая матрицу двумерного целочисленного массива,
// верните транспонированную матрицу.
// Транспонирование матрицы — это переворачивание матрицы
// по ее главной диагонали с переключением индексов строки
// и столбца матрицы.
// 867

matrix = [[1, 2, 3], [4, 5, 6]]

var transpose = function (matrix) {
    const answer = Array.from({ length: matrix[0].length }, () => Array(matrix.length).fill(0))
    //const answer = [];
    console.log(answer)

    for (let i = 0; i < matrix.length; i++) {

        for (let j = 0; j < matrix[0].length; j++) {
            console.log(i + ' - i - ' + j + ' - j - ' + matrix[i][j])
            // console.log(i + ' - i - ' + j + ' - j - ')
            answer[j][i] = matrix[i][j];

        }

    }

    console.log(answer)
    return answer;
};


console.log(transpose(matrix))