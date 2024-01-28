// Имеется сетка размером m x n с шариком.
// Изначально мяч находится в позиции[startRow, startColumn].
// Вам разрешено переместить мяч в одну из четырех соседних 
// ячеек сетки(возможно, за пределы сетки, пересекая ее границу).
// Вы можете применить к мячу максимум движений maxMove.
// Учитывая пять целых чисел m, n, maxMove, startRow, startColumn, 
// верните количество путей, по которым мяч может выйти за пределы сетки.
// Поскольку ответ может быть очень большим, верните его по модулю 109 + 7.

// 576

m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0

var findPaths = function (col, row, nMoves, colBall, rowBall) {
    colBall++;
    rowBall++;
    const mod = 1000000007;
    const count = Array.from({ length: col + 50 + 1 },
        () => Array.from({ length: row + 50 + 1 }).fill(0));
    for (let moves = 0; moves <= nMoves; moves++) {
        for (let i = 0; i <= col + 1; i++) {
            for (let j = 0; j <= row + 1; j++) {
                if (((i + j + moves + colBall + rowBall + nMoves) & 1) === 0) {
                    if (i === 0 || j === 0 || i > col || j > row) {
                        count[i][j] = 1;
                    } else if (moves === 0) {
                        count[i][j] = 0;
                    } else {
                        if (!(1 <= i && i <= col) || !(1 <= j && j <= row) || !(1 <= moves && moves <= nMoves)) {
                            return;
                        }
                        count[i][j] =
                            (count[i + 1][j] +
                                count[i - 1][j] +
                                count[i][j + 1] +
                                count[i][j - 1]) %
                            mod;
                    }
                }
            }
        }
    }
    return count[colBall][rowBall];
};

console.log(findPaths(m, n, maxMove, startRow, startColumn))