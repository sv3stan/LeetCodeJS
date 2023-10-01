// Учитывая несортированный массив целых чисел nums, 
// вернуть длину самой длинной последовательности последовательных элементов.
// Вы должны написать алгоритм, который работает за время O(n).
// 128

nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
//nums = [100, 4, 200, 1, 3, 2]
//nums = [0]
nums = [-1, 1, 0]
var longestConsecutive = function (nums) {
    if (nums.length === 0) return 0;

    const numSet = new Set(nums);
    let maxSubsequence = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentSubsequence = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum += 1;
                currentSubsequence += 1;
            }

            maxSubsequence = Math.max(maxSubsequence, currentSubsequence);
        }
    }

    return maxSubsequence;
};

console.log(longestConsecutive(nums));



// var longestConsecutive = function (nums) {

//     const hashTable = new Map();
//     let maxSubsequence = 0;
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         hashTable.set(nums[i], true)

//     }
//     console.log(hashTable)


//     for (let i = 0; i < nums.length; i++) {
//         if (hashTable.has(nums[i - 1])) {
//             console.log(nums[i])
//             console.log(count)
//             count++;
//         } else {
//             count = 0;
//         }

//         if (maxSubsequence < count) maxSubsequence = count;
//     }
//     return maxSubsequence;
// };