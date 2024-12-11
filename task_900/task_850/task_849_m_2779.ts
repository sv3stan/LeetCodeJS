/**
You are given a 0-indexed array nums and a non-negative integer k.
In one operation, you can do the following:
Choose an index i that hasn't been chosen before from the range [0, nums.length - 1].
Replace nums[i] with any integer from the range [nums[i] - k, nums[i] + k].
The beauty of the array is the length of the longest subsequence consisting of equal elements.
Return the maximum possible beauty of the array nums after applying the operation any number of times.
Note that you can apply the operation to each index only once.
A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the order of the remaining elements.
 */

let nums = [4, 6, 1, 2];
let k = 2;

function maximumBeauty(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);

    let right = 0;
    let max = 0;
    for (let left = 0; left < nums.length; left++) {
        while (right < nums.length && nums[right] - nums[left] <= 2 * k)
            right++;

        max = Math.max(max, right - left);
    }

    return max;
}

console.log(maximumBeauty(nums, k));
