/**
Учитывая отсортированный целочисленный массив nums и целое число n, добавьте/исправьте элементы в массив так, чтобы любое число в диапазоне [1, n] включительно могло быть образовано суммой некоторых элементов массива.
Возвращает минимальное количество необходимых исправлений.
 */

let nums = [1, 3];
let n = 6;
(nums = [1, 5, 10]), (n = 20);
let minPatches = function (nums, n) {
    let temp = 1;
    let adding = 0;
    let i = 0;

    while (temp <= n) {
        if (i < nums.length && nums[i] <= temp) {
            temp += nums[i];
            i++;
        } else {
            temp += temp;
            adding++;
        }
    }

    return adding;
};

console.log(minPatches(nums, n));
