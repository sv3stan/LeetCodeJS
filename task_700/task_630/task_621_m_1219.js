/*
В сетке золотого рудника размером m x n каждая ячейка этой шахты имеет целое число, обозначающее количество золота в этой ячейке, 0, если она пуста.
Верните максимальное количество золота, которое вы можете собрать при выполнении условий:
Каждый раз, когда вы находитесь в ячейке, вы собираете все золото в этой ячейке.
Из своего положения вы можете сделать один шаг влево, вправо, вверх или вниз.
Вы не можете посетить одну и ту же камеру более одного раза.
Никогда не посещайте клетку с 0 золота.
Вы можете начать и прекратить сбор золота с любой позиции в сетке, где есть немного золота.
*/

let grid = [
    [1, 0, 7],
    [2, 0, 6],
    [3, 4, 5],
    [0, 3, 0],
    [9, 0, 20],
];
let getMaximumGold = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    function dfs(row, col, visited) {
        if (
            row < 0 ||
            col < 0 ||
            row >= rows ||
            col >= cols ||
            grid[row][col] === 0 ||
            visited[row][col]
        ) {
            return 0;
        }

        visited[row][col] = true;
        const current = grid[row][col];

        const up = dfs(row - 1, col, visited);
        const down = dfs(row + 1, col, visited);
        const left = dfs(row, col - 1, visited);
        const right = dfs(row, col + 1, visited);

        visited[row][col] = false;

        return current + Math.max(up, down, left, right);
    }

    let max = 0;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] !== 0) {
                max = Math.max(max, dfs(i, j, visited));
            }
        }
    }

    return max;
};

console.log(getMaximumGold(grid));
