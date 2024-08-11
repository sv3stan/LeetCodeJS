/**
Вам дана бинарная сетка m x n, где 1 обозначает сушу, а 0 - воду. Остров - это максимальная 4-направленно (горизонтально или вертикально) связанная группа из 1.
Решетка считается связной, если у нас есть ровно один остров, в противном случае она считается несвязной.
За один день мы можем поменять любую клетку суши (1) на клетку воды (0).
Верните минимальное количество дней для разъединения сетки.
 */

grid = [
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
];

let minDays = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    const count = grid => {
        const visit = Array.from({ length: m }, () => Array(n).fill(false));
        let count = 0;

        const dfs = (x, y) => {
            if (
                x < 0 ||
                y < 0 ||
                x >= m ||
                y >= n ||
                grid[x][y] === 0 ||
                visit[x][y]
            )
                return;
            visit[x][y] = true;
            dfs(x - 1, y);
            dfs(x + 1, y);
            dfs(x, y - 1);
            dfs(x, y + 1);
        };

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === 1 && !visit[i][j]) {
                    count++;
                    dfs(i, j);
                }
            }
        }
        return count;
    };

    if (count(grid) !== 1) return 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                grid[i][j] = 0;
                if (count(grid) !== 1) return 1;
                grid[i][j] = 1;
            }
        }
    }

    return 2;
};

console.log(minDays(grid));
