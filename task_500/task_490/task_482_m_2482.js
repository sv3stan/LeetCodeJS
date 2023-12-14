// Вам дана сетка двоичной матрицы m x n с индексом 0.
// Матрица разностей m x n с индексом 0 создается с помощью следующей процедуры:
// Пусть количество единиц в row - й строке равно oneRowi.
// Пусть количество единиц в col - м столбце равно oneColj.
// Пусть количество нулей в row - й строке равно нулямRowi.
// Пусть количество нулей в col - м столбце равно нулямColj.
//     diff[row][col] = onesRowi + onesColj - нули_Rowi - нулиColj
// Вернуть разностную матрицу diff.

// 2482


grid = [[0, 1, 1], [1, 0, 1], [0, 0, 1]]
grid = [[1, 1, 1], [1, 1, 1]]


var onesMinusZeros = function (grid) {

    let m = grid.length;
    let n = grid[0].length;

    const onesRow = Array.from({ length: m }).fill(0);
    const onesCol = Array.from({ length: n }).fill(0);


    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            onesRow[row] += grid[row][col];
            onesCol[col] += grid[row][col];
        }
    }
    console.log(onesRow)
    console.log(onesCol)

    const answer = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            answer[i][j] = 2 * onesRow[i] + 2 * onesCol[j] - n - m;
        }
    }

    return answer;


};


console.log(onesMinusZeros(grid));