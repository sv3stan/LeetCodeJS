/**
Вам дают бинарную матричную сетку N x N. Вам разрешено изменить не более одного 0, чтобы быть 1. Верните размер крупнейшего острова в сетке после применения этой операции. Остров-это 4-направляющая группа из 1 с.
 */

function largestIsland(grid: number[][]): number {
    const n = grid.length;
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    let islandId = 2;
    const islandSizes = new Map<number, number>();

    function dfs(x: number, y: number, id: number): number {
        if (x < 0 || y < 0 || x >= n || y >= n || grid[x][y] !== 1) return 0;
        grid[x][y] = id;
        let size = 1;
        for (const [dx, dy] of directions) {
            size += dfs(x + dx, y + dy, id);
        }
        return size;
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                const size = dfs(i, j, islandId);
                islandSizes.set(islandId, size);
                islandId++;
            }
        }
    }

    let maxIslandSize =
        islandSizes.size > 0 ? Math.max(...islandSizes.values()) : 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 0) {
                const seenIslands = new Set<number>();
                let potentialSize = 1;

                for (const [dx, dy] of directions) {
                    const ni = i + dx,
                        nj = j + dy;
                    if (
                        ni >= 0 &&
                        nj >= 0 &&
                        ni < n &&
                        nj < n &&
                        grid[ni][nj] > 1
                    ) {
                        seenIslands.add(grid[ni][nj]);
                    }
                }

                for (const id of seenIslands) {
                    potentialSize += islandSizes.get(id) || 0;
                }

                maxIslandSize = Math.max(maxIslandSize, potentialSize);
            }
        }
    }

    return maxIslandSize === 0 ? n * n : maxIslandSize;
}
