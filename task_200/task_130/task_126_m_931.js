// Учитывая массив n x n матрицы целых чисел, вернуть минимальную сумму любого падающего пути через матрицу.
// Падающий путь начинается с любого элемента в первой строке и выбирает элемент в следующей строке, 
// который находится либо непосредственно под ним, либо по диагонали влево / вправо.
// В частности, следующий элемент с позиции(строка, столбец) будет(строка + 1, столбец - 1), 
// (строка + 1, столбец) или(строка + 1, столбец + 1).
// 931

matrix = [[2, 1, 3], [6, 5, 4], [7, 8, 9]]
//matrix = [[3, 5, 2, 4], [4, 9, 6, 7], [2, 3, 5, 6], [4, 7, 1, 8]]
matrix = [[-19, 57], [-40, -5]]

function minFallingPathSum(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j === 0) {
                matrix[i][j] = matrix[i][j] + Math.min(matrix[i - 1][j], matrix[i - 1][j + 1])
            } else {
                if (j === n - 1) {
                    matrix[i][j] = matrix[i][j] + Math.min(matrix[i - 1][j - 1], matrix[i - 1][j]);
                } else {
                    matrix[i][j] = matrix[i][j] + Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1])
                }
            }
        }
    }
    return Math.min(...matrix[m - 1])
};


console.log(minFallingPathSum(matrix));














//const m = matrix.length;
//     const n = matrix[0].length;
//     const dp = Array.from({ length: n }, () => Array(m).fill(0));
//     for (let i = 0; i < n; i++) {
//         dp[0][i] = matrix[0][i];
//     }

//     for (let i = 1; i < m; i++) { // строки
//         for (let j = 0; j < n; j++) { //столбцы
//             console.log(' -----------  ')
//             console.log(matrix[i][j])
//             console.log(i + ' - i - ' + j + ' - j - ')
//             if (j === 0) {
//                 console.log(matrix[i][j])
//                 dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i - 1][j + 1])
//                 console.log(dp[i][j])
//             } if (j === n - 1) {
//                 console.log(matrix[i][j])
//                 console.log(dp[i - 1][j - 1] + ' -  dp[i - 1][j - 1] - ' + dp[i - 1][j] + ' - dp[i - 1][j] - ')
//                 dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j])
//             }
//             if (j > 0 && j < n - 1) {
//                 dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i - 1][j + 1])
//             }
//             console.log(dp)
//         }
//     }

//     console.log(dp)
// };