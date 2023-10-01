// Вам задан массив координат, координаты [i] = [x, y],
// где [x, y] представляет собой координату точки.
// Проверьте, образуют ли эти точки прямую линию в плоскости XY.
// 1232


// coordinates = [
//     [3, 2],
//     [3, 13],
//     [3, 24],
//     [3, 35],
//     [3, 46],
//     [3, 57],
// ];

// coordinates = [
//     [2, 4],
//     [13, 4],
//     [24, 4],
//     [35, 4],
//     [46, 4],
//     [57, 4],
// ];

// coordinates = [
//     [2, 6],
//     [3, 5],
//     [4, 4],
//     [5, 3],
//     [6, 2],
//     [9, -1],
//     [8, 0],
//     [7, 1],
//     [10, -2],
//     [11, -3],
// ];

// coordinates = [
//     [6, 2],
//     [5, 3],
//     [-3, 11],
//     [4, 4],
//     [2, 6],
//     [1, 7],
//     [0, 8],
//     [-1, 9],
//     [-2, 10],
//     [3, 5],
// ];

coordinates = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
];

//function checkStraightLine(coordinates) {
// var checkStraightLine = function (coordinates) {
//     let xCoordinate = coordinates[0][0];
//     let yCoordinate = coordinates[0][1];
//     let isLine = false;

//     coordinates.sort((a, b) => a[0] - b[0]);

//     let firstPoint = coordinates[0];
//     let lastPoint = coordinates[coordinates.length - 1];

//     if (
//         coordinates.every((item) => item[0] == xCoordinate) ||
//         coordinates.every((item) => item[1] == yCoordinate)
//     ) {
//         return isLine;
//     }

//     if (lastPoint[1] > firstPoint[1]) {
//         isLine = coordinates.every((item, index) => {
//             return (
//                 item[0] === firstPoint[0] + index &&
//                 item[1] === firstPoint[1] + index
//             );
//         });
//     } else {
//         isLine = coordinates.every((item, index) => {
//             return (
//                 item[0] === firstPoint[0] + index &&
//                 item[1] === firstPoint[1] - index
//             );
//         });
//     }
//     return isLine;
// };

var checkStraightLine = function (coordinates) {
    const firstPoint = coordinates[0];
    const DiffX = firstPoint[0] - coordinates[1][0];
    const DiffY = firstPoint[1] - coordinates[1][1];

    for (let i = 2; i < coordinates.length; i++) {
        const currentPoint = coordinates[i];
        const currentDiffX = firstPoint[0] - currentPoint[0];
        const currentDiffY = firstPoint[1] - currentPoint[1];
        if (DiffX * currentDiffY !== DiffY * currentDiffX) {
            return false;
        }
    }

    return true;
};

console.log(checkStraightLine(coordinates));
