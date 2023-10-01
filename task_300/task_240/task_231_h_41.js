// Учитывая несортированный целочисленный массив nums, верните наименьшее пропущенное положительное целое число.
// Вы должны реализовать алгоритм, который работает за время O(n) и использует вспомогательное пространство O(1).
// 41

nums = [1, 2, 0]
nums = [3, 4, -1, 1]
nums = [7, 8, 9, 11, 12]


var firstMissingPositive = function (nums) {
    const length = nums.length;
    const hash = new Set();
    let minPositive = 1;
    let max = 0;
    //nums.sort()
    console.log(nums)
    for (let i = 0; i < length; i++) {
        if (nums[i] > 0) {
            hash.add(nums[i])
            console.log(hash)
        }
    }

    for (let i = 0; i < length; i++) {
        if (hash.has(minPositive)) minPositive++
    }
    return minPositive;

};


console.log(firstMissingPositive(nums))























// var firstMissingPositive = function (nums) {
//     const length = nums.length;
//     const hash = new Set();
//     let minPositive = 1;
//     let max = 0;
//     nums.sort()
//     console.log(nums)
//     for (let i = 0; i < length; i++) {
//         if (nums[i] > 0) {
//             hash.add(nums[i])
//             console.log(hash)
//         }
//     }

//     for (let i = 0; i < length; i++) {
//         if (hash.has(minPositive)) minPositive++
//     }
//     return minPositive;

// };