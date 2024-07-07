/**
Учитывая целочисленный массив nums, верните третье отдельное максимальное число в этом массиве. Если третий максимум не существует, верните максимальное число.
 */

let nums = [3, 2, 1];
let thirdMax = function (nums) {
    const hash = new Set(nums);
    const sorted = [...hash].sort((a, b) => b - a);
    return sorted.length > 2 ? sorted[2] : sorted[0];
};

console.log(thirdMax(nums));
