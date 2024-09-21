/**
Учитывая двумерный целочисленный массив nums, где nums[i] — непустой массив различных положительных целых чисел, верните список целых чисел, которые присутствуют в каждом массиве чисел, отсортированных в порядке возрастания.
 */

var intersection = function (nums) {
    const res = [];
    const hash = new Map();
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            hash.set(nums[i][j], hash.get(nums[i][j]) + 1 || 1);
        }
    }

    for (let [key, value] of hash.entries()) {
        if (value === len) {
            res.push(key);
        }
    }

    return res.sort((a, b) => a - b);
};
