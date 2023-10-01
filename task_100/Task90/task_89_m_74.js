// Вам дана целочисленная матрица размера m x n со следующими двумя свойствами:
// Каждая строка сортируется в порядке неубывания.
// Первое целое число каждой строки больше, чем последнее целое число предыдущей строки.
// Учитывая целочисленную цель, вернуть true, если цель находится в матрице, или false в противном случае.
// Вы должны написать решение с временной сложностью O(log(m * n)).
// 74

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 25, 27, 28],
    [30, 32, 35, 38],
    [40, 41, 43, 48],
    [50, 53, 54, 57],
];
matrix = [[1]]
let target = 1;
function searchMatrix(matrix, target) {
    function minItem(arr, number) {
        let start = 0;
        let end = arr.length - 1;
        while (start <= end) {
            let middle = Math.floor((start + end) / 2);
            if (arr[middle] === number) {
                return true;
            } else if (arr[middle] < number) {
                start = middle + 1;
            } else {
                end = middle - 1;
            }
        }
        return false;
    }

    if (matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }

    let start = 0;
    let end = matrix.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        const firstElement = matrix[middle][0];
        const lastElement = matrix[middle][matrix[middle].length - 1];
        if (firstElement <= target && target <= lastElement) {
            return minItem(matrix[middle], target);
        } else if (target < firstElement) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return false;
}
console.log(searchMatrix(matrix, target));

// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 25, 27, 28], [30, 32, 35, 38], [40, 41, 43, 48], [50, 53, 54, 57]];
// let target = 10;
// function searchMatrix(matrix, target) {

//     let start = 0;
//     let end = matrix.length - 1;
//     let max = 0;
//     let min = 0;

//     while (start < end) {
//         let middle = (start + end) >> 1;
//         console.log(start + ' - start - ' + middle + ' - middle - ' + end + ' - end - ');
//         min = matrix[middle][0];
//         max = matrix[middle][matrix[middle].length - 1];

//         console.log(min + ' - min - ' + max + ' - max - ');
//         if (matrix[middle][0] >= target) {
//             if (matrix[middle][0] <= target && target <= matrix[middle][matrix[middle].length - 1]) {
//                 start = middle
//                 console.log('111111111111')
//                 break;
//             } else {
//                 end = middle - 1;
//             }
//         } else {
//             if (matrix[middle][0] <= target && target <= matrix[middle][matrix[middle].length - 1]) {
//                 start = middle
//                 console.log('2222222222222222')
//                 break
//             } else {
//                 start = middle + 1;
//             }
//         }
//         console.log(start + ' - start - ' + middle + ' - middle - ' + end + ' - end - 222');
//     }

//     right = matrix[start].length - 1;
//     left = 0;
//     console.log(start + ' - start - ' + end + ' - end - 333');

//     while (left < right) {
//         let middle = (left + right) >> 1;
//         console.log(matrix[start] + matrix[start][middle])
//         if (matrix[start][middle] >= target) {
//             right = middle;
//         } else {
//             left = middle + 1;
//         }
//     }
//     if (matrix[start][left] === target) {
//         return true;
//     } else {
//         return false;
//     }
//     //return matrix[start][left];

// };
// console.log(searchMatrix(matrix, target));

// while (start < end) {
//     let middle = (start + end) >> 1;
//     console.log(start + ' - start - ' + middle + ' - middle - ' + end + ' - end - ');
//     console.log(matrix[middle][0])
//     console.log(matrix[middle][matrix[middle].length - 1])
//     if (matrix[middle][0] >= target) {
//         if (target <= matrix[middle][matrix[middle].length - 1]) {
//             break;
//         } else {
//             end = middle;
//         }
//     } else {
//         if (target <= matrix[middle][matrix[middle].length - 1]) {
//             break
//         } else {
//             start = middle + 1;
//         }
//     }
//     console.log(start + ' - start - ' + middle + ' - middle - ' + end + ' - end - ');
// }

// // left = 0;
// // right = matrix[start].length - 1;
// // console.log(left + ' - left - ' + right + ' - right - ');
// // while (left < right) {
// //     let middle = (left + right) >> 1;

// //     console.log(left + ' - left - ' + middle + ' - middle - ' + right + ' - right - ');
// //     // search for the minimum element
// //     console.log(matrix[start][0])
// //     console.log(matrix[start][matrix[start].length - 1])
// //     if (matrix[middle][0] <= target) {

// //         left = middle + 1;
// //     } else {
// //         right = middle - 1;
// //     }
