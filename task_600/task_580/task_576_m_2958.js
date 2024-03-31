// Вам дан целочисленный массив nums и целое число k.
// Частота элемента x — это количество раз, которое он встречается в массиве.
// Массив называется хорошим, если частота каждого элемента этого массива меньше или равна k.
// Возвращает длину самого длинного подмассива чисел.
// Подмассив — это непрерывная непустая последовательность элементов массива.
// 2958

nums = [1, 2, 1, 2, 3, 1, 2, 3, 1, 2]
// nums = [1, 2, 1, 2, 1, 2, 1, 2]
// nums = [5, 5, 5, 5, 5, 5, 5]
nums = [2, 2, 3]
nums = [1, 4, 4, 3]
k = 1

var maxSubarrayLength = function (nums, k) {


    let hash = new Map();
    let max = 0;
    let ahead = -1;
    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
        console.log(hash)
        while (hash.get(nums[i]) > k) {
            ahead++;
            hash.set(nums[ahead], hash.get(nums[ahead]) - 1);
        }
        max = Math.max(max, i - ahead);
    }

    return max;







};

console.log(maxSubarrayLength(nums, k))









// let hash = new Map();
// let max = 0;
// let count = 0;
// for (let i = 0; i < nums.length; i++) {

//     console.log(hash.get(nums[i]) + ' --------- ')
//     console.log(count + ' - count ')
//     if (hash.get(nums[i]) === k) {
//         console.log('++++++++')
//         max = Math.max(max, count);
//         // count--;
//         count = 0;
//         continue;
//     }

//     hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
//     console.log(hash)
//     count++;
// }
// max = Math.max(max, count);
// return max;
