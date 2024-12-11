/**
You are given a m x n matrix grid consisting of non-negative integers where grid[row][col] represents the minimum time required to be able to visit the cell (row, col), which means you can visit the cell (row, col) only when the time you visit it is greater than or equal to grid[row][col]. You are standing in the top-left cell of the matrix in the 0th second, and you must move to any adjacent cell in the four directions: up, down, left, and right. Each move you make takes 1 second. Return the minimum time required in which you can visit the bottom-right cell of the matrix. If you cannot visit the bottom-right cell, then return -1.
Вам дана матричная сетка размером m x n, состоящая из неотрицательных целых чисел, где сетка[строка][столбец] представляет минимальное время, необходимое для посещения ячейки (строка, столбец), что означает, что вы можете посетить ячейку (строку, столбец) только тогда, когда время вашего посещения больше или равно Grid[row][col]. В 0-ю секунду вы находитесь в верхней левой ячейке матрицы и должны переместиться в любую соседнюю ячейку в четырех направлениях: вверх, вниз, влево и вправо. Каждое ваше движение занимает 1 секунду. Возвращает минимальное время, необходимое для посещения правой нижней ячейки матрицы. Если вы не можете посетить правую нижнюю ячейку, верните -1.
 */

function minimumTime(grid: number[][]): number {
    if (Math.min(grid[0][1], grid[1][0]) > 1) {
        return -1;
    }

    const totalRows = grid.length;
    const totalCols = grid[0].length;

    const priorityQueue = new MinPriorityQueue({ priority: item => item[0] });
    priorityQueue.enqueue([0, 0, 0]);

    const visitedCells = new Set<string>();
    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    while (!priorityQueue.isEmpty()) {
        const [currentTime, currentRow, currentCol] =
            priorityQueue.dequeue().element;

        if (currentRow === totalRows - 1 && currentCol === totalCols - 1) {
            return currentTime;
        }

        for (const [rowOffset, colOffset] of directions) {
            const nextRow = currentRow + rowOffset;
            const nextCol = currentCol + colOffset;
            const cellKey = `${nextRow},${nextCol}`;

            if (
                nextRow < 0 ||
                nextCol < 0 ||
                nextRow === totalRows ||
                nextCol === totalCols ||
                visitedCells.has(cellKey)
            ) {
                continue;
            }

            const waitTime =
                Math.abs(grid[nextRow][nextCol] - currentTime) % 2 === 0
                    ? 1
                    : 0;
            const nextTime = Math.max(
                grid[nextRow][nextCol] + waitTime,
                currentTime + 1,
            );

            priorityQueue.enqueue([nextTime, nextRow, nextCol]);
            visitedCells.add(cellKey);
        }
    }
    return -1;
}
