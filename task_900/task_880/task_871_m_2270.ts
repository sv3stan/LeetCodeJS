/**
Вам дан целочисленный массив чисел с нулевым индексом длины n. nums содержит допустимое разделение по индексу i, если верно следующее: Сумма первых i + 1 элементов больше или равна сумме последних n - i - 1 элементов. Справа от i есть хотя бы один элемент. То есть 0 <= i < n - 1. Возвращает количество допустимых разделений в числах.
 */
function waysToSplitArray(nums: number[]): number {
    const lengthNums = nums.length;
    const prefixSumLeft = Array(lengthNums).fill(0);
    prefixSumLeft[0] = nums[0];
    const prefixSumRight = Array(lengthNums).fill(0);
    prefixSumRight[lengthNums - 1] = nums[lengthNums - 1];
    for (let i = 1; i < lengthNums; i++) {
        prefixSumLeft[i] = nums[i] + prefixSumLeft[i - 1];
    }

    for (let i = lengthNums - 1; i > 0; i--) {
        prefixSumRight[i - 1] = nums[i - 1] + prefixSumRight[i];
    }
    let cnt = 0;
    for (let i = 1; i < lengthNums; i++) {
        if (prefixSumLeft[i - 1] >= prefixSumRight[i]) {
            cnt++;
        }
    }
    return cnt;
}
