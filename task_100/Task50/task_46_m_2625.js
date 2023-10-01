// Учитывая многомерный массив arr и глубину n, вернуть сглаженную версию этого массива.
// Многомерный массив — это рекурсивная структура данных, содержащая целые числа или другие многомерные массивы.
// Сглаженный массив — это версия этого массива, в которой некоторые или все подмассивы удалены и
// заменены фактическими элементами этого подмассива.Эту операцию выравнивания следует выполнять
// только в том случае, если текущая глубина вложенности меньше n.Глубина элементов в первом массиве считается равной 0.
// Пожалуйста, решите это без встроенного метода Array.flat.
//2625

// const array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

//const array = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
//const array = [11, [2, [3, 4]], 15, [6, [7, 8, [9, 10]]], 111];


//const array = [1, 2, 3, [4, 5, 6, [7, 8], 9, 10], 11, 12, 13];
//const array = [1, 2, 3, [4, 5, 6, [7, 8], 9, 10]];

const array = [[1, 11, 111, 1111,
    [2, 12, [9, 19, 119], 112, 1112], 15, 16]];
// const array = [[1, 11, 111, 1111,
//     [2, 12,
//         [7, 17, 117, 1117,
//             [8, 18, 118, 1118,
//                 [9, 19, 119]]],
//         112, 1112,
//         [3, 13, 113,
//             [4, 5, 6,]]],
//     21, 211]];

// var flat = function (arr, n) {
//     let res = [];
//     const flattening = (nums, l) => {
//         for (const num of nums) {
//             if (Array.isArray(num) && l > 0) {
//                 flattening(num, l - 1);
//             } else {
//                 res.push(num);
//             }
//         }
//     }

//     flattening(arr, n);
//     return res;
// };

function flat(arr, depth = 1) {
    if (depth === 0) {
        return arr.slice();
    }

    return arr.reduce((result, item) => {
        if (Array.isArray(item)) {
            result.push(...flat(item, depth - 1));
        } else {
            result.push(item);
        }
        return result;
    }, []);
}
let n = 2;
// function flattenArray(arr) {
//     return arr.reduce((result, item) => {
//         if (Array.isArray(item)) {
//             result.push(...item);
//         } else {
//             result.push(item);
//         }
//         return result;
//     }, []);
// }

// 
// function flat(arr, n) {
//     let flattenedArray = [];
//     for (let i = 0; i < n; i++) {
//         flattenedArray = flattenArray(arr);
//         arr = flattenedArray;
//     }
//     if (n === 0) {
//         return arr
//     } else {
//         return flattenedArray;
//     }
// };


//flat(array, n);
console.log(flat(array, n));
