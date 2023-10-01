// Вы турист, готовящийся к предстоящему походу.Вам даны высоты, двумерный массив размером строк x столбцов, 
// где высоты[строка][столбец] представляют высоту ячейки(строки, столбца).Вы находитесь в верхней левой ячейке(0, 0) 
// и надеетесь перейти в правую нижнюю ячейку(строки - 1, столбцы - 1)(т.е.с индексом 0).
// Вы можете двигаться вверх, вниз, влево или вправо и хотите найти маршрут, требующий минимальных усилий.
// Усилие маршрута — это максимальная абсолютная разница высот между двумя последовательными ячейками маршрута.
// Возвращает минимальное усилие, необходимое для перемещения из верхней левой ячейки в правую нижнюю.
// 1631

heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]]

var minimumEffortPath = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const graph = new Array(rows).fill().map(() => new Array(cols).fill(Infinity));
    graph[0][0] = 0;

    const pq = [[0, 0, 0]];

    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [effort, row, col] = pq.shift();

        if (row === rows - 1 && col === cols - 1) {
            return effort;
        }

        for (const [dx, dy] of directions) {
            const newRow = row + dx;
            const newCol = col + dy;

            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                const newEffort = Math.max(effort, Math.abs(heights[row][col] - heights[newRow][newCol]));

                if (newEffort < graph[newRow][newCol]) {
                    graph[newRow][newCol] = newEffort;
                    pq.push([newEffort, newRow, newCol]);
                }
            }
        }
    }

    return -1; // Если путь не найден
};

console.log(minimumEffortPath(heights))