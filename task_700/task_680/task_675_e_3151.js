/**
Массив считается особенным, если каждая пара его соседних элементов содержит два числа разной четности.
Вам дан массив целых чисел nums. Возвращайте true, если nums — специальный массив, в противном случае возвращайте false.
 */

let nums = [4, 3, 2, 1];
let isArraySpecial = function (nums) {
    if (nums.length < 2) return true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (
            (nums[i] % 2 !== 0 && nums[i + 1] % 2 === 1) ||
            (nums[i] % 2 !== 1 && nums[i + 1] % 2 === 0)
        )
            return false;
    }
    return true;
};

console.log(isArraySpecial(nums));
