// Учитывая массив целых чисел с индексом 1, который уже отсортирован в неубывающем порядке, 
// найдите два числа, сумма которых дает определенное целевое число.
// Пусть эти два числа будут числами[индекс1] и числами[индекс2], 
// где 1 <= индекс1 < индекс2 < числа.длина.
// Возвращает индексы двух чисел, индекс1 и индекс2, добавленные на единицу, 
// в виде целочисленного массива[индекс1, индекс2] длины 2.
// Тесты генерируются так, что существует ровно одно решение.
// Вы не можете использовать один и тот же элемент дважды.
// Ваше решение должно использовать только постоянное дополнительное пространство.
// 167



numbers = [2, 7, 11, 15], target = 9
numbers = [1, 3, 5, 8, 9, 12, 15, 17, 19, 22, 24, 25], target = 14
//numbers = [2, 3, 4], target = 6
//numbers = [0, 0, 3, 4], target = 0
numbers = [-1, -1, 1, 1, 1, 1, 1, 1, 1, 1], target = -2
numbers = [5, 25, 75]; target = 100;
var twoSum = function (numbers, target) {

    // const isFind = numbers.findIndex((item) => item > target);
    // console.log(isFind)
    // let firstIndex = 0;
    // let secondIndex = 0;

    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        console.log(left + ' - left - ' + right + ' - right')
        if (numbers[left] + numbers[right] === target) {
            return [left + 1, right + 1]
        } else if (numbers[left] + numbers[right] < target) {
            left++;
        } else {
            right--;
        }
    }
    return [-1, -1];
};



console.log(twoSum(numbers, target))




















// const arr = numbers.filter((item) => item <= target);



// let middle = 0;
// let pointEr = 0;

// //while (point !== arr.length - 1) {
// for (let point = 0; point < arr.length - 1; point++) {

//     let isFind = target - arr[point];


//     let left = point;
//     let right = arr.length - 1;

//     console.log(point + ' - point - ')
//     while (left <= right) {
//         console.log('------------')
//         console.log(left + ' - left - ' + isFind + ' - isFind -')


//         middle = (left + right) >> 1;
//         console.log(middle)
//         if (isFind === arr[middle]) {
//             console.log('!!!!!!!!!!!!!!!!!!')
//             return [point, middle];
//         }
//         // if (isFind < arr[middle]) {
//         //     left = middle + 1;
//         // } else {
//         //     right = middle - 1
//         // }

//         left++
//         //right--;
//         console.log(middle + ' - middle - ' + left + ' - left - ' + right + ' - right')
//     }
//     pointEr = point;
// }

// console.log(arr)
// console.log(pointEr)
// return [pointEr, middle + 1];
// //.sort((a, b) => a - b)

















// const isFind = numbers.findIndex((item) => item > target);
// console.log(isFind)
// let firstIndex = 0;
// let secondIndex = 0;

// //const answer = [firstIndex, secondIndex];

// for (let point = 0; point < numbers.length - 1; point++) {

//     let left = point + 1;

//     //let right = (numbers.findIndex((item) => item > target) !== -1 ? numbers.findIndex((item) => item > target) : numbers.length - 1);
//     let right = numbers.length - 1;

//     while (left <= right) {
//         console.log(target + ' - target - ' + numbers[point] + ' - numbers[point] - ' + numbers[left] + ' - numbers[left] - ')
//         if (target - numbers[point] === numbers[left]) {
//             //        console.log('322222222')
//             return [point + 1, left + 1];
//         }
//         left++
//         secondIndex = left;
//     }
//     firstIndex = point;
// }

// console.log('111111111111')
// return [firstIndex, secondIndex];