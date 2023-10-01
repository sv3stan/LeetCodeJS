// Вам дана сетка целочисленного массива m x n.В верхнем левом углу(т.е.grid[0][0]) изначально находится робот.
// Робот пытается переместиться в нижний правый угол(т.е.grid[m - 1][n - 1]).
// Робот может двигаться только вниз или вправо в любой момент времени.
// Препятствие и пространство отмечены как 1 или 0 соответственно в сетке.
// Путь, по которому идет робот, не может включать ни одного квадрата, являющегося препятствием.
// Возвращает количество возможных уникальных путей, по которым робот может добраться до правого нижнего угла.
// Тестовые случаи генерируются таким образом, чтобы ответ был меньше или равен 2 * 109.
// 63

//obstacleGrid = [[1, 0, 0], [0, 1, 0], [0, 0, 0]];
//obstacleGrid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
obstacleGrid = [[0, 1], [0, 0]]

function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = [];
    for (let i = 0; i < m; i++) {
        dp.push(new Array(n).fill(0));
    }
    //const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0] === 1) {
            break;
        }
        dp[i][0] = 1;
    }

    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j] === 1) {
            break;
        }
        dp[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (!obstacleGrid[i][j]) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }

    return dp[m - 1][n - 1];

};

console.log(uniquePathsWithObstacles(obstacleGrid));










 // if (!obstacleGrid.length || !obstacleGrid[0].length || obstacleGrid[0][0] === 1) {
    //     return 0;
    // }
    // // if (obstacleGrid[1][0] === 1 || obstacleGrid[0][1] === 1) {
    // //     return 1;
    // // }

    // const m = obstacleGrid.length;
    // const n = obstacleGrid[0].length;
    // const dp = Array.from({ length: m }, () => Array(n).fill(0));
    // console.log(dp)
    // dp[0] = Array(n).fill(1);
    // for (let i = 1; i < m; i++) {
    //     dp[i][0] = 1;
    // }
    // console.log(dp)
    // let i = 1;

    // while (i < m) {
    //     console.log('+++++++++')
    //     let j = 1;
    //     while (j < n) {
    //         console.log('------------')
    //         console.log(obstacleGrid[i][j] + ' i - ' + i + ' - j - ' + j)
    //         console.log(obstacleGrid)
    //         if (obstacleGrid[i][j] & 1) { dp[i][j] = 0; } else {

    //             dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    //             console.log(dp)
    //             //[j]dp[i].push(obstacleGrid[i][j]);
    //         }
    //         j++;
    //     }
    //     i++;
    // }
    // console.log(dp)
    // return dp[m - 1][n - 1]