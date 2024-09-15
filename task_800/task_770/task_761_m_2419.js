/**
    Вам дан целочисленный массив чисел размера n.
    Рассмотрим непустой подмассив из nums, который имеет максимально возможное побитовое И.
    Другими словами, пусть k — максимальное значение побитового И любого подмассива чисел. Тогда следует рассматривать только подмассивы с побитовым И, равным k.
    Возвращает длину самого длинного такого подмассива.
    Побитовое И массива — это побитовое И всех чисел в нем.
    Подмассив — это непрерывная последовательность элементов массива.
 */

let nums = [1, 5, 2, 3, 5, 5, 5, 5, 3, 6, 6, 6, 6, 6, 3, 6, 6, 6, 2, 2];
nums = [
    311155, 311155, 311155, 311155, 311155, 311155, 311155, 311155, 201191,
    311155,
];

nums = [1, 2, 3, 4];
nums = [
    378034, 378034, 378034, 378034, 0, 378034, 378034, 378034, 378034, 378034,
    378034,
];

// nums = [
//     323376, 323376, 323376, 323376, 323376, 323376, 323376, 75940, 323376,
//     323377, 323377,
// ];

let longestSubarray = function (nums) {
    let max = 0;
    let maxCnt = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        if (max < nums[i]) {
            console.log('111111111111111111111');
            console.log('🚀 ~ longestSubarray ~ i:', i);
            max = nums[i];
            maxCnt = 1;
            maxLen = 1;
            console.log('🚀 ~ longestSubarray ~ maxCnt:', maxCnt);
        } else if (max === nums[i]) {
            console.log('22222222222222222');
            console.log('🚀 ~ longestSubarray ~ i:', i);

            maxCnt++;
            console.log('🚀 ~ longestSubarray ~ maxCnt:', maxCnt);
        } else if (max != nums[i]) {
            console.log('3333333333333333333');
            maxLen = Math.max(maxCnt, maxLen);
            maxCnt = 0;
        }
    }
    maxLen = Math.max(maxCnt, maxLen);
    return maxLen;
};

console.log(longestSubarray(nums));
