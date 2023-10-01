// Вам дана сетка m x n, где каждая ячейка может иметь одно из трех значений:
// 0 представляет пустую ячейку,
// 1, представляющий свежий апельсин, или
// 2, представляющий гнилой апельсин.
// Каждую минуту любой свежий апельсин, соседствующий с гнилым апельсином в четырех направлениях, становится гнилым.
// Возвращает минимальное количество минут, которое должно пройти, 
// пока ни в одной ячейке не останется свежего апельсина.Если это невозможно, вернуть - 1.
// 994

grid = [[2, 1, 1], [1, 1, 0], [0, 1, 1]];
grid = [[0, 2]]

function orangesRotting(grid) {
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    let fresh = 0;
    let minutes = 0;
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];


    for (let i = 0; i <= m - 1; i++) {
        for (let j = 0; j <= n - 1; j++) {
            if (grid[i][j] === 2) queue.push([i, j]);
            if (grid[i][j] === 1) fresh++;
        }
    }

    if (fresh === 0) return 0

    while (queue.length > 0) {
        console.log(queue);
        const new_rotten = [];
        for (const [x, y] of queue) {
            for (const [dx, dy] of direction) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
                    grid[nx][ny] = 2;
                    fresh--;
                    new_rotten.push([nx, ny]);
                }
            }
        }
        queue.length = 0;
        queue.push(...new_rotten);
        if (new_rotten.length > 0) {
            minutes++;
        }
    }
    return fresh === 0 ? minutes : -1;

};


console.log(orangesRotting(grid));