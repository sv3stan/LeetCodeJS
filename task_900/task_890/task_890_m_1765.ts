﻿/**
Вам дана целочисленная матрица isWater размером m x n, которая представляет собой карту ячеек суши и воды. Если isWater[i][j] == 0, ячейка (i, j) является ячейкой суши. Если isWater[i][j] == 1, ячейка (i, j) является ячейкой воды. Вы должны назначить каждой ячейке высоту таким образом, чтобы это соответствовало следующим правилам: Высота каждой ячейки должна быть неотрицательной. Если ячейка представляет собой ячейку воды, ее высота должна быть равна 0. Любые две соседние ячейки должны иметь абсолютную разницу высот не более 1. Ячейка является смежной с другой ячейкой, если первая находится непосредственно к северу, востоку, югу или западу от последней (т. Е. Их стороны соприкасаются). Найдите такое назначение высот, чтобы максимальная высота в матрице была максимальной. Возвращает высоту целочисленной матрицы размером m x n, где height[i][j] — высота ячейки (i, j). Если существует несколько решений, верните любое из них.
 */

function highestPeak(isWater: number[][]): number[][] {
    const m = isWater.length;
    const n = isWater[0].length;

    const height = Array.from({ length: m }, () => Array(n).fill(-1));
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    const queue: [number, number][] = [];

    // Инициализируем очередь ячейками с водой и задаём их высоту = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0;
                queue.push([i, j]);
            }
        }
    }

    // BFS с использованием оптимизированной очереди
    let index = 0; // Указатель на текущий элемент очереди
    while (index < queue.length) {
        const [x, y] = queue[index++];

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // Проверяем границы и обработку ячейки
            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < m &&
                ny < n &&
                height[nx][ny] === -1
            ) {
                height[nx][ny] = height[x][y] + 1;
                queue.push([nx, ny]); // Добавляем в очередь
            }
        }
    }

    return height;
}
