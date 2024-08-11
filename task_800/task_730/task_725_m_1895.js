/**
Магический квадрат k x k - это сетка k x k, заполненная целыми числами так, что сумма каждой строки, каждого столбца и обеих диагоналей равна. Целые числа в магическом квадрате не обязательно должны быть различными. Каждая сетка 1 x 1 тривиально является магическим квадратом.
Если задана целочисленная сетка m x n, верните размер (т. е. длину стороны k) самого большого магического квадрата, который можно найти в этой сетке.
 */

let grid = [
    [7, 1, 4, 5, 6],
    [2, 5, 1, 6, 4],
    [1, 5, 4, 3, 2],
    [1, 2, 7, 3, 4],
];

let largestMagicSquare = function (grid) {
    const m = grid.length;
    const n = grid[0].length;
    const maxSize = Math.min(m, n);
    function checkMagicSquare(grid, row, col, k) {
        let magicSum = null;
        let diagSum1 = 0,
            diagSum2 = 0;

        for (let i = 0; i < k; i++) {
            let rowSum = 0;
            let colSum = 0;
            diagSum1 += grid[row + i][col + i];
            diagSum2 += grid[row + i][col + k - 1 - i];

            for (let j = 0; j < k; j++) {
                rowSum += grid[row + i][col + j];
                colSum += grid[row + j][col + i];
            }

            if (magicSum === null) {
                magicSum = rowSum;
            } else if (rowSum !== magicSum || colSum !== magicSum) {
                return false;
            }
        }

        if (diagSum1 !== magicSum || diagSum2 !== magicSum) {
            return false;
        }

        return true;
    }
    for (let k = maxSize; k > 0; k--) {
        for (let i = 0; i <= m - k; i++) {
            for (let j = 0; j <= n - k; j++) {
                if (checkMagicSquare(grid, i, j, k)) {
                    return k;
                }
            }
        }
    }

    return 1;
};

console.log(largestMagicSquare(grid));
