/**
You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values: 0 represents an empty cell, 1 represents an obstacle that may be removed. You can move up, down, left, or right from and to an empty cell. Return the minimum number of obstacles to remove so you can move from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1).
Вам дана сетка двумерного целочисленного массива с нулевым индексом размером m x n. Каждая ячейка имеет одно из двух значений: 0 представляет собой пустую ячейку, 1 представляет собой препятствие, которое можно устранить. Вы можете перемещаться вверх, вниз, влево или вправо от пустой ячейки и к ней. Верните минимальное количество препятствий для удаления, чтобы вы могли переместиться из верхнего левого угла (0, 0) в нижний правый угол (m - 1, n - 1).
 */

const DIRECTIONS = [
    [-1, 0],
    [0, -1],
    [0, 1],
    [1, 0],
];

function minimumObstacles(grid: number[][]): number {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited: boolean[][] = Array.from({ length: rows }, () =>
        Array(cols).fill(false),
    );

    visited[0][0] = true;

    const queues: number[][][] = [[], []];
    let currentQueue = 0;

    queues[currentQueue].push([0, 0]);

    let moves = 0;

    while (queues[currentQueue].length > 0) {
        const currentQueueCells = queues[currentQueue];
        for (let i = 0; i < currentQueueCells.length; i++) {
            const [row, col] = currentQueueCells[i];
            if (row === rows - 1 && col === cols - 1) {
                return moves;
            }

            for (const [dRow, dCol] of DIRECTIONS) {
                const newRow = row + dRow;
                const newCol = col + dCol;

                if (
                    newRow < 0 ||
                    newRow >= rows ||
                    newCol < 0 ||
                    newCol >= cols
                ) {
                    continue;
                }

                if (!visited[newRow][newCol]) {
                    visited[newRow][newCol] = true;

                    queues[currentQueue ^ grid[newRow][newCol]].push([
                        newRow,
                        newCol,
                    ]);
                }
            }
        }

        queues[currentQueue].length = 0;

        moves++;

        currentQueue ^= 1;
    }

    return -1;
}
