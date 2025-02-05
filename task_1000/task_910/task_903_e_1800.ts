/**
Учитывая массив положительных целых чисел, верните максимально возможную сумму восходящего субрайя в Nums. Субаррей определяется как смежная последовательность чисел в массиве. Subarray [numsl, numsl+1, ..., numsr-1, numsr] поднимается, если для всех i, где l <= i <r, numsi <numsi+1. Обратите внимание, что субрай размера 1 поднимается.
 */

function maxAscendingSum(nums: number[]): number {
    let maxCount = 0;
    let currentCount = nums[0];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            currentCount += nums[i + 1];
        } else {
            maxCount = Math.max(currentCount, maxCount);
            currentCount = nums[i + 1];
        }
    }

    maxCount = Math.max(currentCount, maxCount);

    return maxCount;
}
