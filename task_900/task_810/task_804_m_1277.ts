/**
Учитывая матрицу m * n, состоящую из единиц и нулей, выведите количество квадратных подматриц, в которых все единицы.
 */

let matrix = [
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
];

function countSquares(matrix: number[][]): number {
    const row = matrix.length;
    const col = matrix[0].length;

    const dp = Array.from({ length: row + 1 }, () => Array(col + 1).fill(0));
    let ans = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] == 1) {
                dp[i + 1][j + 1] =
                    Math.min(dp[i][j + 1], dp[i + 1][j], dp[i][j]) + 1;
                ans += dp[i + 1][j + 1];
            }
        }
    }
    return ans;
}

console.log(countSquares(matrix));
