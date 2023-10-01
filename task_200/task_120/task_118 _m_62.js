// На сетке m x n стоит робот.Робот изначально расположен в верхнем левом углу(т.е.grid[0][0]).
// Робот пытается переместиться в нижний правый угол(т.е.grid[m - 1][n - 1]).
// Робот может двигаться только вниз или вправо в любой момент времени.
// Имея два целых числа m и n, верните количество возможных уникальных путей, 
// по которым робот может добраться до правого нижнего угла.
// Тестовые случаи генерируются таким образом, чтобы ответ был меньше или равен 2 * 109.
// 62


m = 4;
n = 4;

function uniquePaths(m, n) {
    const dp = Array.from({ length: m }, () => Array(n).fill(1)); // самый быстрый способ заполнения массива

    //const dp = new Array(m).fill(new Array(n).fill(1))  // хуже чем в цикле

    console.log(dp)
    // const dp = new Array(m);
    // for (let i = 0; i < m; i++) {
    //     dp[i] = new Array(n);
    // }

    // for (let i = 0; i < m; i++) {
    //     dp[i][0] = 1;
    // }
    // for (let i = 0; i < n; i++) {
    //     dp[0][i] = 1;
    // }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    console.log(dp)
    return dp[m - 1][n - 1]

    //const dp = new Array(m).fill(new Array(n).fill(0))

};

console.log(uniquePaths(m, n));