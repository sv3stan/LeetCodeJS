/**
You are given an integer array nums and an integer k.Find the maximum subarray sum of all the subarrays of nums that meet the following conditions: The length of the subarray is k, and All the elements of the subarray are distinct. Return the maximum subarray sum of all the subarrays that meet the conditions.If no subarray meets the conditions, return 0. A subarray is a contiguous non-empty sequence of elements within an array.
Вам дан целочисленный массив nums и целое число k. Найдите максимальную сумму подмассивов всех подмассивов чисел, которые удовлетворяют следующим условиям: Длина подмассива равна k, а Все элементы подмассива различны. Возвращает максимальную сумму подмассивов всех подмассивов, соответствующих условиям. Если ни один подмассив не соответствует условиям, верните 0. Подмассив — это непрерывная непустая последовательность элементов массива.
 */

const nums = [1, 5, 4, 2, 9, 9, 9];
let k = 3;

function maximumSubarraySum(nums: number[], k: number): number {
    let maxSum = 0; // Максимальная сумма
    let sum = 0; // Текущая сумма окна
    let start = 0; // Левая граница окна
    const hash = new Set<number>(); // Множество для проверки уникальности

    for (let end = 0; end < nums.length; end++) {
        const rightNum = nums[end];

        // Удаляем элементы, чтобы избавиться от повторяющихся
        while (hash.has(rightNum) || end - start >= k) {
            const leftNum = nums[start];
            hash.delete(leftNum);
            sum -= leftNum;
            start++;
        }

        // Добавляем текущий элемент в окно
        hash.add(rightNum);
        sum += rightNum;

        // Проверяем длину окна и обновляем максимум
        if (hash.size === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }

    return maxSum;
}

console.log(maximumSubarraySum(nums, k));
