/**
Вам дают 0-индексированную 2D-матричную сетку размера m x n, где (r, c) представляет: Земельный клетку, если сетка [r] [c] = 0, или Водяная клетка, содержащая сетку [R] [C] Fish, если сетка [R] [C]> 0. Фишер может начать с любых водных клеток (r, c) и может выполнять следующие операции в любое количество раз: Поймать всю рыбу в клетке (r, c), или Перейти на любую соседнюю водяную клетку. Верните максимальное количество рыбы, которую рыбак может поймать, если он оптимально выберет свою стартовую клетку или 0, если водных клеток не существует. Смежная клетка клетки (R, C), является одной из ячейки (R, C + 1), (r, c - 1), (r + 1, c) или (r - 1, c), если это существует.
 */

function findMaxFish(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    let maxFish = 0;

    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    const dfs = (r: number, c: number): number => {
        if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] === 0) {
            return 0;
        }

        let fishCount = grid[r][c];
        grid[r][c] = 0;

        for (const [dr, dc] of directions) {
            const newRow = r + dr;
            const newCol = c + dc;
            fishCount += dfs(newRow, newCol);
        }

        return fishCount;
    };

    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] > 0) {
                maxFish = Math.max(maxFish, dfs(r, c));
            }
        }
    }

    return maxFish;
}
