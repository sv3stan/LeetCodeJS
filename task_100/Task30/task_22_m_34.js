// Учитывая массив целых чисел, отсортированных
// в неубывающем порядке, найдите начальную и
// конечную позицию заданного целевого значения.
// Если цель не найдена в массиве, вернуть[-1, -1].
// Вы должны написать алгоритм со сложностью выполнения O(log n).
//34

//let nums = [5, 7, 7, 8, 8];
//let nums = [1, 2, 2, 3, 4, 4, 5, 7, 7, 8, 8, 10, 11, 11, 12, 13, 14, 15, 15, 16, 17, 18, 18, 19, 20, 21, 22, 23, 23, 24, 25, 26, 28, 29, 29, 31, 32, 33, 34, 34, 34, 34, 34, 41, 42, 42, 43, 45, 46, 47, 48, 48, 49, 49, 50];
//let nums = [1, 2, 2, 3, 4, 4, 5, 5, 7, 7, 8, 8, 10, 11, 11, 12, 13, 14, 15, 15, 16]; //21
//          0  1  2  3  4  5  6  7  8  9  10 11 12  13  14  15  16  17  18  19  20
//let target = 8;

//let nums = [1, 2, 2, 2, 3, 4, 5, 6, 8, 8, 8, 8, 8, 9];
//let target = 9;

let nums = [2];
let target = 2;

//let nums = [5, 7, 7, 8, 8, 9];
//let target = 5;

function searchRange(nums, target) {
    let max = nums[nums.length - 1];
    let numsLength = nums.length - 1;
    let min = 0;
    let res;
    let result = [];

    if (nums.length == 0) {
        return [-1, -1];
    }
    if ((max === 1) && nums[min] === target) {
        return [0, 0];
    }
    if ((max === 1) && nums[min] !== target) {

        return [-1, -1];
    }
    if ((target > nums[numsLength]) || target < nums[min]) {
        return [-1, -1];
    }


    if (target == nums[0]) {
        res = 0;
    }

    if (target == nums[numsLength]) {
        res = numsLength;
    }
    max = numsLength;

    while (nums[res] != target) {
        res = Math.round((max - min) / 2) + min;

        if (nums[res - 1] < target && target < nums[res]) {

            return [-1, -1];
        }
        if (nums[res] < target) {
            min = Math.round((max - min) / 2) + min;

        } else {
            max = Math.round((max - min) / 2) + min;
        }

    }
    let i = res;
    let j = res;
    while (nums[i] == target || nums[j] == target) {
        if (nums[i] == target) {
            result[0] = i;
            i--;
        }
        if (nums[j] == target) {
            result[1] = j;
            j++;
        }
    }
    return result;
}

console.log(searchRange(nums, target));






// let max = nums[nums.length - 1];
// let numsLength = nums.length - 1;
// let min = nums[0];
// let res;
// let result = [];
// let index = 0;



// if (nums.length == 0) {
//     return [-1, -1];
// }
// if ((max === 1) && min === target) {
//     return [0, 0];
// }
// if ((max === 1) && min !== target) {
//     return [-1, -1];
// }
// if ((target > max) || target < min) {
//     return [-1, -1];
// }

// // if (res == target) {
// //     index = Math.round((max - min) / 2) + min;
// //     console.log(index + ' -- Сюда зашли');
// // }

// if (target == nums[0]) {
//     res = 0;
//     index = 0;
//     console.log(index + ' -- index --++');
// }

// if (target == nums[numsLength]) {
//     res = numsLength;
//     index = numsLength;
//     console.log(index + ' -- index --++');
// }
// max = numsLength;
// min = 0;
// console.log(min + ' - min -' + max + ' - max');
// // let nums = [1, 2, 2, 2, 3, 4, 5, 6, 8, 8, 8, 8, 8, 9];
// while (nums[res] != target) {
//     res = Math.round((max - min) / 2) + min;
//     //res = nums[Math.round((max - min) / 2) + min];
//     if (nums[index - 1] < target && target < nums[index]) {
//         console.log(index + ' - index - ' + nums[index - 1] + ' - nums[index - 1] -' + nums[index] + ' - nums[index]');
//         console.log(' Мы здесь');
//         return [-1, -1];
//     }
//     if (nums[res] < target) {
//         min = Math.round((max - min) / 2) + min;
//         console.log(res + ' -- res MIN --' + min + '-- min -- ' + index + ' -- index');
//     } else {
//         max = Math.round((max - min) / 2) + min;
//         console.log(res + ' -- res MAX -- ' + max + '--max -- ' + index + ' -- index');
//     }
//     //res = nums[Math.round((max - min) / 2) + min];
//     index = Math.round((max - min) / 2) + min;
//     console.log(res + ' -- res -- ' + index + ' -- index');
// }

// //let i = index;
// let i = res;
// let j = res;
// //let j = index;
// console.log(nums[res] + ' -- nums[res] ===');
// while (nums[i] == target || nums[j] == target) {
//     if (nums[i] == target) {
//         result[0] = i;
//         i--;
//     }
//     if (nums[j] == target) {
//         result[1] = j;
//         j++;
//     }
// }

// console.log(result);
// return result;



















// function searchRange(nums, target) {
//     let max = nums.length - 1;
//     let min = 0;
//     let res;
//     let result = [];
//     let index;
//     res = Math.round(max / 2);
//     console.log(res + ' -- res')
//     while (res != target) {

//         if (min < target) {
//             min = nums[Math.round((max - min) / 2) + min];
//             //res = nums[Math.round((max - min) / 2) + min];
//             //index = Math.round((max - min) / 2) + min;
//             //MAX = res;
//             console.log(res + ' -- res MAX -- ' + max + '--max -- ' + index + ' -- index');
//         } else {
//             max = nums[Math.round((max - min) / 2) + min];

//             console.log(res + ' -- res MIN --' + min + '-- min -- ' + index + ' -- index');
//         }

//         res = nums[Math.round((max - min) / 2) + min];
//         index = Math.round((max - min) / 2) + min;

//     }

//     let i = index;
//     let j = index;
//     while (nums[i] == target || nums[j] == target) {

//         if (nums[i] == target) {
//             result[0] = i;
//             i--;
//         }
//         if (nums[j] == target) {
//             result[1] = j;
//             j++;
//         }

//     }

//     console.log(result);

// };

// let max = nums.length - 1;
// let min = 0;
// let res;
// let result = [];
// let index;
// res = Math.round(max / 2);
// while (res != target) {
//     if (min < target) {
//         min = nums[Math.round((max - min) / 2) + min];
//     } else {
//         max = nums[Math.round((max - min) / 2) + min];
//     }
//     res = nums[Math.round((max - min) / 2) + min];
//     index = Math.round((max - min) / 2) + min;
// }

// let i = index;
// let j = index;
// while (nums[i] == target || nums[j] == target) {
//     if (nums[i] == target) {
//         result[0] = i;
//         i--;
//     }
//     if (nums[j] == target) {
//         result[1] = j;
//         j++;
//     }
// }

// console.log(result);
// return result;
