/*
Учитывая сетку целочисленной матрицы размера length x length, верните минимальную сумму падающего пути с ненулевыми сдвигами.
Падающий путь с ненулевыми сдвигами — это выбор ровно одного элемента из каждой строки сетки так, чтобы никакие два элемента, выбранные в соседних строках, не находились в одном столбце.
*/

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

let minFallingPathSum = function (grid) {
    const length = grid.length;
    const dp = [...grid[0]];
    for (let i = 1; i < length; i++) {
        const newDp = Array.from({ length: length }).fill(0);

        for (let j = 0; j < length; j++) {
            let min = Infinity;
            for (let k = 0; k < length; k++) {
                if (k !== j) min = Math.min(min, dp[k]);
            }
            newDp[j] = grid[i][j] + min;
        }
        dp.splice(0, length, ...newDp);
    }
    return Math.min(...dp);
};

console.log(minFallingPathSum(grid));
