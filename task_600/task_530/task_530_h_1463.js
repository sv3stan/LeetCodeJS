// Вам дана матричная сетка строк x столбцов, представляющая поле вишен, 
// где grid[i][j] представляет количество вишен, которые вы можете собрать из cell(i, j).

// У вас есть два робота, которые могут собирать для вас вишню:

// Робот №1 расположен в верхнем левом углу(0, 0), а
// Робот №2 расположен в правом верхнем углу(0, столбцы — 1).
// Верните максимальное количество собранных вишен, используя обоих роботов, следуя приведенным ниже правилам:

// Из cell(i, j) роботы могут перейти в cell(i + 1, j - 1), (i + 1, j) или (i + 1, j + 1).
// Когда любой робот проходит через ячейку, он собирает все вишенки, и ячейка становится пустой.
// Когда оба робота остаются в одной ячейке, вишню забирает только один.
// Оба робота в любой момент не могут выйти за пределы сетки.
// Оба робота должны достичь нижнего ряда сетки.

// 1463


grid = [[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]]

var cherryPickup = function (grid) {
    const n = grid.length;
    const m = grid[0].length;

    const dp = Array.from({ length: n }).fill(null).map(() => Array.from({ length: m }).fill(null).map(() => Array.from({ length: m }).fill(0)));

    let cherry = 0;
    dp[0][0][m - 1] = grid[0][0] + grid[0][m - 1];

    for (let i = 1; i < n; ++i) {

        for (let j = 0; j < m; ++j) {

            for (let k = 0; k < m; ++k) {

                if (j > i || k < m - i - 1 || j > k) continue;

                dp[i][j][k] = dp[i - 1][j][k];
                if (j - 1 >= 0) {
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k]);
                }

                if (j - 1 >= 0 && k - 1 >= 0)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k - 1]);
                if (j - 1 >= 0 && k + 1 < m)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j - 1][k + 1]);

                if (j + 1 < m) {
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k]);
                }

                if (j + 1 < m && k - 1 >= 0)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k - 1]);
                if (j + 1 < m && k + 1 < m)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j + 1][k + 1]);

                if (k - 1 >= 0)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k - 1]);

                if (k + 1 < m)
                    dp[i][j][k] = Math.max(dp[i][j][k], dp[i - 1][j][k + 1]);

                if (j != k) {
                    dp[i][j][k] += grid[i][j] + grid[i][k];
                } else {
                    dp[i][j][k] += grid[i][j];
                }

                cherry = Math.max(cherry, dp[i][j][k]);
            }
        }
    }

    return cherry;
};


console.log(cherryPickup(grid));