/**
You are given an array of integers nums of length n and a positive integer k. The power of an array is defined as: Its maximum element if all of its elements are consecutive and sorted in ascending order. -1 otherwise. You need to find the power of all subarrays of nums of size k. Return an integer array results of size n - k + 1, where results[i] is the power of nums[i..(i + k - 1)].
Вам дан массив целых чисел nums длины n и положительное целое число k. Мощность массива определяется как: Максимальный элемент, если все его элементы последовательные и отсортированы в порядке возрастания. -1 иначе. Вам нужно найти силу всего подмассивы чисел размера k. Возвращает результат целочисленного массива размером n – k + 1, где results[i] — это степень числа nums[i..(i + k – 1)].
 */

function resultsArray(nums: number[], k: number): number[] {
    if (k === 1) return nums;

    let count = 1;
    const len = nums.length - 1;
    const result: number[] = Array.from({ length: len - k + 2 }, () => -1);

    for (let i = 0; i < len; i++) {
        if (nums[i] + 1 === nums[i + 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count >= k) result[i - k + 2] = nums[i + 1];
    }

    return result;
}
