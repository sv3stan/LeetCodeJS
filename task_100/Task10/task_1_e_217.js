// Учитывая числа целочисленного массива, верните true, если какое - либо значение встречается
// в массиве хотя бы дважды, и верните false, если каждый элемент различен.
// 217
// Перенес 08092023 с файла D:\Program\LeetCodeJS\task_100\Task10\task_2_m_347.js. Было две задачи в одном файле.
// Вроде перенес. А потом вернул в начало. До конца так и не разобрался.
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

function containsDuplicate(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
    //         return true;
    //     }
    // }
    // return false;

    for (let i = 0; i < nums.length; i++) {
        //console.log(nums[i] + '-------' + (i+1))
        if (nums.includes(nums[i], i + 1)) {
            return true;
        }
    }
    return false;
}

console.log(containsDuplicate(nums))
















//  Осталось старое непонятное откуда и почему.
// // Учитывая целое число x, верните true, если x является
// // палиндром и false в противном случае.
// // 9

// // function findPalindromes(arr) {
// //     let palindromArray = [];
// //     for (let i = 0; i < arr.length; i++) {
// //         let isCurrent = arr[i];
// //         let isEquality = true;
// //         for (let j = 0; j < isCurrent.length / 2; j++) {
// //             if (!(isCurrent[j] === isCurrent[isCurrent.length - j - 1])) {
// //                 isEquality = false;
// //                 break;
// //             }
// //         }
// //         if (isEquality) {
// //             palindromArray.push(isCurrent);
// //         }
// //     }
// //     return palindromArray;
// // }

// function findPalindromes(head) {
//     return head.filter((item) => {
//         for (let i = 0; i < head.length; i++) {
//             if (item[i] !== item[item.length - i - 1]) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }

// console.log(findPalindromes(words));
