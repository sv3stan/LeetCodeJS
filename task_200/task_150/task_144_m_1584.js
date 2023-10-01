// Вам задан массив точек, представляющий целочисленные координаты некоторых точек на 2D - плоскости, где точки[i] = [xi, yi].
// Стоимость соединения двух точек[xi, yi] и[xj, yj] равна манхэттенскому расстоянию между ними: | xi - xj | + | yi - yj |, 
// где | val | обозначает абсолютное значение val.
// Вернуть минимальную стоимость, чтобы все точки соединились.Все точки связаны, если существует ровно один простой путь между любыми двумя точками.
// 1584

//points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]
const points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]

//class Solution {
function minCostConnectPoints(points) {
    function manhattanDistance(point1, point2) {
        return Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
    }
    const n = points.length;
    const visit = new Array(n).fill(0);
    const minCost = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    let currentPoint = 0;
    minCost[0] = 0;
    let result = 0;
    console.log(visit)
    //console.log(minCost)
    while (currentPoint >= 0) {
        visit[currentPoint] = 1;
        console.log(visit)
        let nextPoint = -1;
        let minCurrentCost = Number.MAX_SAFE_INTEGER;

        for (let point = 0; point < n; point++) {
            if (visit[point] || currentPoint === point) {
                continue;
            }

            minCost[point] = Math.min(manhattanDistance(points[currentPoint], points[point]), minCost[point]);

            if (minCost[point] < minCurrentCost) {
                minCurrentCost = minCost[point];
                nextPoint = point;
            }
        }

        if (minCurrentCost === Number.MAX_SAFE_INTEGER) {
            result += 0;
        } else {
            result += minCurrentCost;
        }

        currentPoint = nextPoint;
    }

    return result;
    //}
};

console.log(minCostConnectPoints(points))

// const solution = new Solution();
// //const points = [[0, 0], [2, 2], [3, 10], [5, 2]];
// const points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]]
// const result = solution.minCostConnectPoints(points);
// console.log(result); // Вывод: минимальная стоимость соединения всех точек