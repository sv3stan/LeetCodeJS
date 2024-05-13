/*
Вам дана сетка целочисленной матрицы размера n x n.
Сгенерируйте целочисленную матрицу maxLocal размера (n - 2) x (n - 2) такую, что:
maxLocal[i][j] равен наибольшему значению матрицы 3 x 3 в сетке, сосредоточенной вокруг строки i + 1 и столбца j + 1.
Другими словами, мы хотим найти наибольшее значение в каждой непрерывной матрице 3 x 3 в сетке.
Верните сгенерированную матрицу.
*/

let grid = [
    [9, 9, 8, 1],
    [5, 6, 2, 6],
    [8, 2, 6, 4],
    [6, 2, 2, 2],
];
// grid = [
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 2, 1, 1],
//     [1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1],
// ];

let largestLocal = function (grid) {
    const m = grid[0].length;
    const n = grid.length;

    const maxLocal = Array.from({ length: m - 2 }, () =>
        Array.from({ length: n - 2 }).fill(0),
    );

    for (let x = 0; x < m - 2; x++) {
        for (let y = 0; y < n - 2; y++) {
            maxLocal[x][y] = Math.max(
                grid[x][y],
                grid[x][y + 1],
                grid[x][y + 2],
                grid[x + 1][y],
                grid[x + 1][y + 1],
                grid[x + 1][y + 2],
                grid[x + 2][y],
                grid[x + 2][y + 1],
                grid[x + 2][y + 2],
            );
        }
    }

    return maxLocal;
};

console.log(largestLocal(grid));
