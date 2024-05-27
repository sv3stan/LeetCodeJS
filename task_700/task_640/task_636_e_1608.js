/*
Вам дан массив чисел неотрицательных целых чисел. nums считается особенным, если существует такое число x, что в nums ровно x чисел, которые больше или равны x.
Обратите внимание, что x не обязательно должен быть элементом числа nums.
Верните x, если массив особенный, в противном случае верните -1. Можно доказать, что если nums является особенным, значение x уникально.
*/
let nums = [0, 4, 3, 0, 4];

nums = [3, 5, 6, 7, 8];
nums = [0, 0];
let specialArray = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = nums.length; i >= 0; i--) {
        if (helper(i)) return i;
    }
    return -1;

    function helper(target) {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            if (nums[middle] < target) left = middle + 1;
            else right = middle - 1;
        }

        const result = nums.length - left;

        return result === target;
    }
};
console.log(specialArray(nums));
