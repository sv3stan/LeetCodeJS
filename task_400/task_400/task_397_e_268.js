// Учитывая массив nums, содержащий n различных чисел в 
// диапазоне[0, n], верните единственное число в диапазоне, 
// которое отсутствует в массиве.
// 268

nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

var missingNumber = function (nums) {

    const n = nums.length;

    // Шаг 1: Размещаем каждое число на правильной позиции, если это возможно.
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Обмениваем числа, чтобы поместить их на правильные позиции.
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }

    // Шаг 2: Находим первый элемент, который не находится на своей правильной позиции.
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // Если все числа с 1 до n уже на своих местах, то ответ - n + 1.
    return n + 1;


    // const hash = new Set(nums);

    // for (let i = 0; i <= nums.length; i++) {

    //     if (!(hash.has(i))) return i;

    // }

};

console.log(missingNumber(nums))