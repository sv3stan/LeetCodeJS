/**
Учитывая матрицу m * n, состоящую из единиц и нулей, выведите количество квадратных подматриц, в которых все единицы.
 */

let matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
];

function countSquares(matrix: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;

    // Создаем массив для подсчета максимальных ходов
    const dp = Array.from({ length: m }, () => Array(n).fill(0));

    // Перебираем столбцы справа налево
    for (let col = n - 2; col >= 0; col--) {
        for (let row = 0; row < m; row++) {
            // Проверяем возможность перехода вправо
            if (grid[row][col] < grid[row][col + 1]) {
                dp[row][col] = Math.max(dp[row][col], dp[row][col + 1] + 1);
            }
            // Проверяем возможность перехода вправо-вверх
            if (row > 0 && grid[row][col] < grid[row - 1][col + 1]) {
                dp[row][col] = Math.max(dp[row][col], dp[row - 1][col + 1] + 1);
            }
            // Проверяем возможность перехода вправо-вниз
            if (row < m - 1 && grid[row][col] < grid[row + 1][col + 1]) {
                dp[row][col] = Math.max(dp[row][col], dp[row + 1][col + 1] + 1);
            }
        }
    }

    // Находим максимальное число возможных ходов, начиная из любого ряда первого столбца
    let maxMoves = 0;
    for (let row = 0; row < m; row++) {
        maxMoves = Math.max(maxMoves, dp[row][0]);
    }

    return maxMoves;
}

console.log(countSquares(matrix));
