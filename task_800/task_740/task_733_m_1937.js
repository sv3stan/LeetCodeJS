/*
Вам дано m x n целочисленных точек матрицы (с индексом 0). Начиная с 0 баллов, вы хотите максимизировать количество баллов, которое вы можете получить из матрицы.
Чтобы получить очки, вы должны выбрать одну ячейку в каждом ряду. Выбор ячейки по координатам (r, c) добавит к вашему счету очки[r][c].
Однако вы потеряете очки, если выберете ячейку слишком далеко от ячейки, выбранной в предыдущем ряду. Для каждых двух соседних строк r и r + 1 (где 0 <= r < m - 1) выбор ячеек в координатах (r, c1) и (r + 1, c2) вычтет abs(c1 - c2) из вашего результата.
Верните максимальное количество очков, которое вы можете набрать.
abs(x) определяется как:
х для х >= 0.
-x для x <0.
 */

let points = [
    [1, 2, 3],
    [1, 5, 1],
    [3, 1, 1],
];
let maxPoints = function (points) {
    const rows = points.length;
    const cols = points[0].length;
    let pRow = Array.from({ lengths: cols });

    for (let col = 0; col < cols; ++col) {
        pRow[col] = points[0][col];
    }

    for (let row = 0; row < rows - 1; ++row) {
        const rightMax = new Array(cols);
        const leftMax = new Array(cols);
        const cRow = new Array(cols);

        leftMax[0] = pRow[0];
        for (let col = 1; col < cols; ++col) {
            leftMax[col] = Math.max(leftMax[col - 1] - 1, pRow[col]);
        }

        rightMax[cols - 1] = pRow[cols - 1];
        for (let col = cols - 2; col >= 0; --col) {
            rightMax[col] = Math.max(rightMax[col + 1] - 1, pRow[col]);
        }

        for (let col = 0; col < cols; ++col) {
            cRow[col] =
                points[row + 1][col] + Math.max(leftMax[col], rightMax[col]);
        }

        pRow = cRow;
    }

    return Math.max(...pRow);
};

console.log(maxPoints(points));
