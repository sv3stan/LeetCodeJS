/*
Вам даны m массивов, каждый из которых отсортирован по возрастанию.
Вы можете взять два целых числа из двух разных массивов (каждый массив выбирает одно) и вычислить расстояние. Мы определяем расстояние между двумя целыми числами a и b как их абсолютную разность |a - b|.
Вернуть максимальное расстояние.
 */

let arrays = [
    [1, 2, 3],
    [4, 5],
    [1, 2, 3],
];
arrays = [
    [1, 4],
    [0, 5],
];

arrays = [[-2], [-3, -2, 1]];

let maxDistance = function (arrays) {
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];
    let answer = -Infinity;

    for (let i = 1; i < arrays.length; i++) {
        answer = Math.max(
            answer,
            Math.abs(arrays[i][arrays[i].length - 1] - min),
            Math.abs(max - arrays[i][0]),
        );

        min = Math.min(min, arrays[i][0]);
        max = Math.max(max, arrays[i][arrays[i].length - 1]);
    }
    return answer;
};

console.log(maxDistance(arrays));

// let min = arrays[0][0];
// let max = arrays[0][arrays[0].length - 1];
// let m = arrays.length;

// for (let i = 1; i < m; i++) {
//     max = Math.max(max, arrays[i][arrays[i].length - 1]);

//     console.log('🚀 ~ maxDistance ~ max:', max);

//     min = Math.min(min, arrays[i][0]);

//     console.log('🚀 ~ maxDistance ~ min:', min);
// }

// let maxDistance = -Infinity;

// for (let i = 0; i < m; i++) {
//     maxDistance = Math.max(
//         maxDistance,
//         max - arrays[i][0], // случай, если минимальный элемент был в другом массиве
//         arrays[i][arrays[i].length - 1] - min, // случай, если максимальный элемент был в другом массиве
//     );
//     console.log('🚀 ~ maxDistance ~ maxDistance;:', maxDistance);
//     console.log('🚀 ~ maxDistance ~ max:', max);
//     console.log('🚀 ~ maxDistance ~ arrays[i][0]:', arrays[i][0]);
//     console.log(
//         '🚀 ~ maxDistance ~ arrays[i][arrays[i].length - 1]:',
//         arrays[i][arrays[i].length - 1],
//     );
// }

// return maxDistance;
