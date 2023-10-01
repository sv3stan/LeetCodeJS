// Учитывая сетку m x n, заполненную неотрицательными числами, 
// найдите путь из верхнего левого угла в нижний правый, 
// который минимизирует сумму всех чисел на своем пути.
// Примечание.В любой момент времени вы можете двигаться только вниз или вправо.
// 64

//grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
//grid = [[1, 3, 2, 1], [1, 4, 3, 2], [2, 1, 4, 3], [1, 2, 4, 1]];
grid = [[1, 2, 3], [4, 5, 6]]
function minPathSum(grid) {
    const m = grid[0].length;
    const n = grid.length;
    const dp = Array.from({ length: n }, () => Array(m).fill(0));

    // dp[0][0] = grid[0][0]

    for (let i = 1; i < m; i++) {
        grid[0][i] = grid[0][i] + grid[0][i - 1];
    }

    for (let i = 1; i < n; i++) {
        grid[i][0] = grid[i][0] + grid[i - 1][0];
    }

    // console.log(dp)
    for (let i = 1; i < n; i++) {
        for (let j = 1; j < m; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
            // const minusI = [i - 1];
            // const minusJ = [j - 1];
            // if (grid[minusI][j] < grid[i][minusJ]) {
            //     grid[i][j] = grid[minusI][j] + grid[i][j]
            // } else {
            //     grid[i][j] = grid[i][minusJ] + grid[i][j];
            // }
            console.log(grid)
            //     console.log(' ---- ')
            //     console.log(dp)
            // }
        }
    }
    console.log(grid)


    return grid[n - 1][m - 1]

};

console.log(minPathSum(grid));


























// const m = grid[0].length;
// const n = grid.length;
// const dp = Array.from({ length: n }, () => Array(m).fill(0));

// dp[0][0] = grid[0][0]

// for (let i = 1; i < m; i++) {
//     dp[0][i] = grid[0][i] + dp[0][i - 1];
// }

// for (let i = 1; i < n; i++) {
//     dp[i][0] = grid[i][0] + dp[i - 1][0];
// }

// console.log(dp)
// for (let i = 1; i < n; i++) {
//     for (let j = 1; j < m; j++) {
//         const minusI = [i - 1];
//         const minusJ = [j - 1];
//         if (dp[minusI][j] < dp[i][minusJ]) {
//             dp[i][j] = dp[minusI][j] + grid[i][j]
//         } else {
//             dp[i][j] = dp[i][minusJ] + grid[i][j];
//         }
//         console.log(grid)
//         console.log(' ---- ')
//         console.log(dp)
//     }
// }

// console.log(dp)


// return dp[n - 1][m - 1]