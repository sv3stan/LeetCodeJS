/**
You are given a 0-indexed integer array nums. A subarray of nums is called continuous if: Let i, i + 1, ..., j be the indices in the subarray. Then, for each pair of indices i <= i1, i2 <= j, 0 <= |nums[i1] - nums[i2]| <= 2. Return the total number of continuous subarrays. A subarray is a contiguous non-empty sequence of elements within an array.
Вам дан целочисленный массив чисел с нулевым индексом. Подмассив чисел называется непрерывным, если: Пусть i, i + 1, ..., j — индексы в подмассиве. Тогда для каждой пары индексов i <= i1, i2 <= j, 0 <= |nums[i1] - nums[i2]| <= 2. Возвращает общее количество непрерывных подмассивов. Подмассив — это непрерывная непустая последовательность элементов массива.
 */

function continuousSubarrays(nums: number[]): number {
    const hash = new Map<number, number>();
    let left = 0;
    let right = 0;
    let n = nums.length;
    let cnt = 0;

    while (right < n) {
        hash.set(nums[right], (hash.get(nums[right]) || 0) + 1);

        while (Math.max(...hash.keys()) - Math.min(...hash.keys()) > 2) {
            const leftValue = nums[left];
            hash.set(leftValue, hash.get(leftValue)! - 1);

            if (hash.get(leftValue) === 0) {
                hash.delete(leftValue);
            }

            left++;
        }
        cnt += right - left + 1;
        right++;
    }

    return cnt;
}
