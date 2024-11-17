/**
Given an integer array nums and an integer k, return the length of the shortest non-empty subarray of nums with a currentSum of at least k.If there is no such subarray, return -1. A subarray is a contiguous part of an array.
Учитывая целочисленный массив nums и целое число k, верните длину кратчайшего непустого подмассива чисел с суммой не менее k. Если такого подмассива нет, верните -1. Подмассив — это непрерывная часть массива.
 */
let nums = [2, 3, 1, 2, 4, 3];
let k = 7;
nums = [1, 3, -1, 3, 5, 3, 6, 7];
k = 17;
nums = [84, -37, 32, 40, 95];
k = 167;
function shortestSubarray(nums: number[], k: number): number {
    let minLength = nums.length + 1;

    let currentSum = 0;
    let start = 0;
    let end = -1;
    const deque: number[] = [];
    for (let right = 0; right < nums.length; ++right) {
        let item = nums[right];

        currentSum += item;
        if (item >= 0) {
            end++;
            deque[end] = right;
            end++;
            deque[end] = item;
            if (currentSum >= k) {
                while (currentSum - deque[start + 1] >= k) {
                    currentSum -= deque[start + 1];
                    start += 2;
                }
                minLength = Math.min(minLength, right - deque[start] + 1);
            }
        } else if (currentSum <= 0) {
            currentSum = 0;
            start = 0;
            end = -1;
        } else {
            for (item = -item; deque[end] <= item; end -= 2) {
                item -= deque[end];
            }
            deque[end] -= item;
        }
    }

    return minLength <= nums.length ? minLength : -1;
}

console.log(shortestSubarray(nums, k));
