/*
Вам дана двумерная матричная сетка с индексом 0 и размером length x length, где (r, c) представляет собой:
Ячейка, содержащая вора, если Grid[r][c] = 1
Пустая ячейка, если Grid[r][c] = 0
Изначально вы находитесь в ячейке (0, 0). За один ход вы можете перейти в любую соседнюю ячейку сетки, в том числе в ячейки, содержащие воров.
Коэффициент безопасности пути в сетке определяется как минимальное манхэттенское расстояние от любой ячейки пути до любого вора в сетке.
Возвращает максимальный запас прочности всех путей, ведущих к ячейке (n–1, n–1).
Соседняя ячейка ячейки (r, c), является одной из ячеек (r, c + 1), (r, c - 1), (r + 1, c) и (r - 1, c), если она существует. .
Манхэттенское расстояние между двумя клетками (a, b) и (x, y) равно |a - x| + |b - y|, где |val| обозначает абсолютное значение val.
*/
let grid = [
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
];

let maximumSafenessFactor = function (grid) {
    const length = grid.length;
    const direct = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    const isInBound = (r, c) => r >= 0 && r < length && c >= 0 && c < length;

    const dist = Array.from({ length: length }, () =>
        Array(length).fill(Infinity),
    );
    const queue = [];

    for (let r = 0; r < length; r++) {
        for (let c = 0; c < length; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    for (let i = 0; i < queue.length; i++) {
        const [r, c] = queue[i];
        for (const [dr, dc] of direct) {
            const nr = r + dr;
            const nc = c + dc;
            if (isInBound(nr, nc) && dist[nr][nc] === Infinity) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    const max = Array.from({ length: length }, () => Array(length).fill(0));
    queue.length = 0;
    max[0][0] = dist[0][0];
    queue.push([0, 0]);

    for (let i = 0; i < queue.length; i++) {
        const [r, c] = queue[i];
        for (const [dr, dc] of direct) {
            const nr = r + dr;
            const nc = c + dc;
            if (isInBound(nr, nc)) {
                const newDistance = Math.min(max[r][c], dist[nr][nc]);
                if (newDistance > max[nr][nc]) {
                    max[nr][nc] = newDistance;
                    queue.push([nr, nc]);
                }
            }
        }
    }

    return max[length - 1][length - 1];
};

console.log(maximumSafenessFactor(grid));
