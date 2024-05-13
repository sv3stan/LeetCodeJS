/*
Вам дана сетка двоичной матрицы размером m x n.
Ход состоит из выбора любой строки или столбца и переключения каждого значения в этой строке или столбце (т. е. изменения всех 0 на 1 и всех 1 на 0).
Каждая строка матрицы интерпретируется как двоичное число, а оценка матрицы — это сумма этих чисел.
Верните максимально возможный результат после любого количества ходов (включая ноль ходов).
*/
let grid = [
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
];
let matrixScore = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    for (let i = 0; i < m; i++) {
        if (grid[i][0] === 0) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 0) {
                    grid[i][j] = 1;
                } else {
                    grid[i][j] = 0;
                }
            }
        }
    }

    let cnt = 0;

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            if (grid[i][j] === 0) cnt++;
        }
        if (cnt > m - cnt) {
            for (let i = 0; i < m; i++) {
                grid[i][j] = 1 - grid[i][j];
            }
        }
        cnt = 0;
    }

    let answer = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let columnScore = grid[i][j] << (n - j - 1);
            answer += columnScore;
        }
    }

    return answer;
};

console.log(matrixScore(grid));
