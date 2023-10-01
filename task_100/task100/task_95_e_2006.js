// Для массива целых чисел nums и целого числа k вернуть количество пар(i, j), где i < j, таких, что | nums[i] - nums[j] | == к.
// Значение | х | определяется как:
// х, если х >= 0.
// - х, если х < 0.
// 2006
let nums = [1, 2, 2, 1];
nums = [3, 2, 1, 5, 4];
let k = 3;
function countKDifference(nums, k) {
    const numCount = new Map();
    let count = 0;
    for (const num of nums) {
        if (numCount.has(num - k)) {
            count += numCount.get(num - k);
        }
        if (numCount.has(num + k)) {
            count += numCount.get(num + k);
        }
        numCount.set(num, (numCount.get(num) || 0) + 1);
    }
    return count;
}

console.log(countKDifference(nums, k));

// const hash = new Map();
// let count = 0;
// nums.sort((a, b) => a - b);
// // console.log(nums)
// // nums.forEach((index, item) => {
// //     console.log(item + ' - item - ' + index + ' - index')

// //     hash.set(index, item);
// // })

// // for (const [index, num] of nums.entries()) {
// //     hash.set(num, index);
// // }
// for (const [index, num] of nums.entries()) {
//     if (hash.has(num)) {
//         hash.get(num).push(index);
//     } else {
//         hash.set(num, [index]);
//     }
// }

// console.log(hash)
// for (const quantity of hash.keys()) {
//     console.log([quantity])
//     console.log(quantity + '- quantity - ' + k + '- k ')
//     if (((hash.has(quantity + k)))) {
//         // hash.set(quantity, (hash.get(quantity) || 0) - 1);
//         console.log(quantity + '- quantity - ' + k + '- k ' + ' - 11111111111111')
//         count++;
//     }
//     // console.log(hash)
// }
// return count;
