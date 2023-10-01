// Магический квадрат 3 x 3 представляет собой сетку 3 x 3, заполненную различными числами от 1 до 9,
// так что каждая строка, столбец и обе диагонали имеют одинаковую сумму.
// Учитывая сетку строк x столбцов целых чисел, сколько существует подсеток 3 x 3 «магических квадратов»?
// (Каждая подсетка непрерывна).
//840


// let grid = [
//     [4, 3, 8, 4],
//     [9, 5, 1, 9],
//     [2, 7, 6, 2],
//     [1, 4, 5, 6],
// ];

//let grid = [[8]];
let grid = [[9, 9, 5, 1, 9, 5, 5, 7, 2, 5], [9, 1, 8, 3, 4, 6, 7, 2, 8, 9], [4, 1, 1, 5, 9, 1, 5, 9, 6, 4], [5, 5, 6, 7, 2, 8, 3, 4, 0, 6], [1, 9, 1, 8, 3, 1, 4, 2, 9, 4], [2, 8, 6, 4, 2, 7, 3, 2, 7, 6], [9, 2, 5, 0, 7, 8, 2, 9, 5, 1], [2, 1, 4, 4, 7, 6, 2, 4, 3, 8], [1, 2, 5, 3, 0, 5, 10, 8, 5, 2], [6, 9, 6, 8, 8, 4, 3, 6, 0, 9]]






function numMagicSquaresInside(grid) {
    function MagicSquare(matrix) {
        let hash = new Set();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (hash.has(matrix[i][j])) {
                    return false;
                } else {
                    hash.add(matrix[i][j]);
                }
            }
        }

        // Проверяем суммы диагоналей только один раз
        const magicSum = 15;
        if (
            matrix[0][0] + matrix[1][1] + matrix[2][2] !== magicSum ||
            matrix[0][2] + matrix[1][1] + matrix[2][0] !== magicSum
        ) {
            return false;
        }

        // Проверяем суммы строк и столбцов
        for (let i = 0; i < 3; i++) {
            if (
                magicSum !== matrix[i].reduce((sum, item) => (sum += item), 0) ||
                magicSum !== matrix.reduce((sum, row) => (sum += row[i]), 0)
            ) {
                return false;
            }
        }
        return true;
    }

    function toMatrix(col, row) {
        let matrix = [[], [], []];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[row + i] && grid[row + i][col + j]) {
                    matrix[i].push(grid[row + i][col + j]);
                } else {
                    return null; // Handle incomplete 3x3 matrices
                }
            }
        }
        return matrix;
    }

    let sumMagicSquares = 0;
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[i].length - 2; j++) {
            const matrix = toMatrix(j, i);
            if (matrix !== null && MagicSquare(matrix)) {
                sumMagicSquares++;
            }
        }
    }
    return sumMagicSquares;
}
console.log(numMagicSquaresInside(grid));





// function numMagicSquaresInside(grid) {
//     function MagicSquare(matrix) {
//         let hash = new Set();
//         const magicSum = 15;

//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 if (
//                     hash.has(matrix[i][j]) ||
//                     matrix[i][j] > 9 ||
//                     matrix[i][j] < 1
//                 ) {
//                     return false;
//                 } else {
//                     hash.add(matrix[i][j]);
//                 }
//             }
//         }
//         // console.log(matrix[0][0] + ' - matrix[0][0] - ' + matrix[1][1] + ' - matrix[1][1] - ' + matrix[2][2] + ' - matrix[2][2]');
//         // console.log(matrix[0][2] + ' - matrix[0][2] - ' + matrix[1][1] + ' - matrix[1][1] - ' + matrix[2][0] + ' - matrix[0][2]');
//         if (
//             matrix[0][0] + matrix[1][1] + matrix[2][2] !== magicSum ||
//             matrix[0][2] + matrix[1][1] + matrix[2][0] !== magicSum
//         ) {
//             return false;
//         }
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 //       console.log(matrix[0].reduce((sum, item) => (sum += item), 0));
//                 if (
//                     magicSum !== matrix[j].reduce((sum, item) => (sum += item), 0)
//                 ) {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }

//     function toMatrix(col, row) {
//         let matrix = [[], [], []];
//         for (let i = 0; i < 3; i++) {
//             for (let j = 0; j < 3; j++) {
//                 matrix[i].push(grid[row + i][col + j]);
//             }
//         }
//         console.log(matrix);
//         return matrix;
//     }



//     let sumMagicSquares = 0;
//     for (let i = 0; i < grid.length - 2; i++) {
//         console.log(i + ' - i  - ');
//         console.log(grid[i].length);
//         for (let j = 0; j < grid[i].length - 2; j++) {
//             console.log(j + '- j ');
//             if (MagicSquare(toMatrix(i, j))) sumMagicSquares++;
//         }
//     }
//     return sumMagicSquares;
// }
