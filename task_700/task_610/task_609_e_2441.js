/*
Учитывая целочисленный массив nums, который не содержит нулей, найдите наибольшее положительное целое число k такое, что -k также существует в массиве.
Верните положительное целое число k. Если такого целого числа нет, верните -1.
*/

// 2441
let nums = [-1, 10, 6, 7, -7, 1];
nums = [
    -49, 8, 19, -39, 37, 22, -39, 4, 37, 8, 20, -2, -4, -5, 14, -14, -27, 24,
    30, 3, -12, 19, 22, 28, -3, -6, 6, 22, 37, 27, 16, 27, -6, -49, 31, 29,
];

let findMaxK = function (nums) {
    const negativeHash = new Set();

    nums.forEach((num, index) => {
        if (num < 0) {
            negativeHash.add(Math.abs(num));
            nums[index] = 0;
        }
    });

    nums.sort((a, b) => b - a);

    console.log(negativeHash);
    console.log(nums);
    for (let i = 0; i < nums.length; i++) {
        if (negativeHash.has(nums[i])) return nums[i];
    }

    return -1;
};

console.log(findMaxK(nums));
