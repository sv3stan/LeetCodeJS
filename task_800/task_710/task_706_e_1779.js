/*
Вам даны два целых числа, x и y, которые представляют ваше текущее местоположение в декартовой сетке: (x, y). Вам также дан массив точек, где каждая точка [i] = [ai, bi] означает, что точка существует в (ai, bi). Точка действительна, если она имеет ту же координату X или Y, что и ваше местоположение.
Возвращает индекс (с индексом 0) допустимой точки с наименьшим расстоянием до Манхэттена от вашего текущего местоположения. Если их несколько, верните действительную точку с наименьшим индексом. Если действительных баллов нет, верните -1.
Манхэттенское расстояние между двумя точками (x1, y1) и (x2, y2) равно abs(x1 - x2) + abs(y1 - y2).
*/

let x = 3;
let y = 4;
let points = [
    [1, 2],
    [3, 1],
    [2, 4],
    [2, 3],
    [4, 4],
];

let nearestValidPoint = function (x, y, points) {
    let min = Infinity;
    let index = -1;
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            if (min > Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y)) {
                min = Math.abs(points[i][0] - x) + Math.abs(points[i][1] - y);
                index = i;
            }
        }
    }
    return index;
};

console.log(nearestValidPoint(x, y, points));

// points.sort((a, b) => a[0] - b[0]);
// console.log(points);

// points.sort((a, b) => a[1] - b[1]);
// console.log(points);

// for (let i = 0; i < points.length; i++) {
//     if (points[i][0] === x || points[i][1] === y) {
//         return i;
//     }
// }

// return -1;
