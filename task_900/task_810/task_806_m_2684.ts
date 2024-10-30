/**
Вам дана матричная сетка размером m x n с нулевым индексом, состоящая из целых положительных чисел.
Вы можете начать с любой ячейки первого столбца матрицы и перемещаться по сетке следующим образом:
Из ячейки (row, col) можно перейти в любую из ячеек: (row - 1, col + 1), (row, col + 1) и (row + 1, col + 1) такую, 
что значение ячейка, в которую вы перемещаетесь, должна быть строго больше значения текущей ячейки.
Возвращает максимальное количество ходов, которое вы можете выполнить.
 */

let grid = [
    [2, 4, 3, 5],
    [5, 4, 9, 3],
    [3, 4, 2, 11],
    [10, 9, 13, 15],
];

function maxMoves(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => 0),
    );
    let maxMoves = 0;

    for (let col = n - 1; col >= 0; col--) {
        for (let row = 0; row < m; row++) {
            if (col === n - 1) {
                dp[row][col] = grid[row][col];
            } else {
                dp[row][col] = Math.max(dp[row][col + 1], grid[row][col]);
                maxMoves = Math.max(maxMoves, dp[row][col]);
            }
        }
    }

    return m * n - maxMoves;
}

console.log(maxMoves(grid)); // Output: 16
