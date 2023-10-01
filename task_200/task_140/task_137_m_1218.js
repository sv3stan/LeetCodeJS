// Учитывая целочисленный массив arr и целочисленную разницу, вернуть длину самой длинной подпоследовательности в arr,
// которая является арифметической последовательностью, такой что разница между соседними элементами в подпоследовательности равна разнице.
// Подпоследовательность — это последовательность, которая может быть получена из arr
// путем удаления некоторых элементов или их отсутствия без изменения порядка оставшихся элементов.
// 1218

arr = [1, 5, 7, 8, 5, 3, 4, 2, 1];
difference = -2;

function longestSubsequence(arr, difference) {
    const hashTable = new Map();
    let maxCount = 1;
    for (const num of arr) {
        if (hashTable.has(num - difference)) {
            hashTable.set(num, hashTable.get((num - difference)) + 1)
            if (hashTable.get(num) > maxCount) maxCount = hashTable.get(num);
        } else {
            hashTable.set(num, 1);
        }
    }
    return maxCount;
};

console.log(longestSubsequence(arr, difference))



// //решение перенесенное из файла task_200\task_160\task_153_m_1218.js

// // arr = [1, 5, 7, 8, 5, 3, 4, 2, 1], difference = -2

// // var longestSubsequence = function (arr, difference) {

// //     //let hash = new Map();
// //     const hashTable = {};

// //     for (let i = 0; i < arr.length; i++) {
// //         hashTable[i] = arr[i]
// //     }
// //     console.log(hashTable)
// //     for (let i = 0; i < arr.length; i++) {
// //         for (let j = i + 1; j < arr.length; j++) {

// //             if (arr[j] - arr[i] === difference) {
// //                 let key;
// //                 if (key in hashTable) {
// //                     const retrievedValue = hashTable[key];
// //                     hashTable[key] = retrievedValue + 1;
// //                 } else {
// //                     hashTable[key] = 1;
// //                 }


// //                 // if (hash.has(arr[j])) {
// //                 //     hash.set(arr[j], hash.get(arr[j]) + 1)
// //                 // } else {
// //                 //     hash.set(arr[j], 1)
// //                 // }
// //             }

// //         }
// //     }

// //     console.log(hashTable)


// // };


// // console.log(longestSubsequence(arr, difference))





// перенесенное решение из файла D:\Program\LeetCodeJS\task_200\task_170\task_163_m_1218.js
// почему то 1218 было аж в трех разных файлах!!!!

// // Учитывая целочисленный массив arr и целочисленную разницу,
// // верните длину самой длинной подпоследовательности в arr,
// // которая представляет собой арифметическую последовательность,
// // такую, что разница между соседними элементами в подпоследовательности равна разнице.
// // Подпоследовательность — это последовательность, которую можно получить из arr путем
// // удаления некоторых элементов или их отсутствия без изменения порядка остальных элементов.
// // 1218

// arr = [1, 5, 7, 8, 5, 3, 4, 2, 1], difference = -2
// arr = [1, 2, 4, 3, 5, 8, 7, 5, 1], difference = 2
// //arr = [1, 2, 3, 4], difference = 1
// //arr = [1, 3, 5, 7], difference = 1
// var longestSubsequence = function (arr, difference) {

//     const hashTable = new Map();
//     let maxCount = 1;

//     for (const num of arr) {
//         console.log('-------------')
//         console.log(num - difference)
//         if (hashTable.has(num - difference)) {
//             console.log(' ==== ')
//             hashTable.set(num, hashTable.get((num - difference)) + 1)
//             if (hashTable.get(num) > maxCount) maxCount = hashTable.get(num);

//         } else {
//             hashTable.set(num, 1);
//         }

//         console.log(hashTable)

//     }

//     hashTable.sort((a, b) => a - b)

//     console.log(hashTable)

//     return maxCount;
// };

// console.log(longestSubsequence(arr, difference))