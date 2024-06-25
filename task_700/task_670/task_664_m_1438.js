/**
Учитывая массив целых чисел nums и целочисленный предел, верните размер самого длинного непустого подмассива, при котором абсолютная разница между любыми двумя элементами этого подмассива меньше или равна пределу.

*/

let nums = [8, 2, 4, 7];
let limit = 4;
nums = [1, 5, 6, 7, 8, 10, 6, 5, 6];
limit = 4;
let longestSubarray = function (nums, limit) {
    let left = 0;
    let right = 0;
    let answer = 0;

    let maxDeque = []; // для отслеживания максимального элемента
    let minDeque = []; // для отслеживания минимального элемента

    while (right < nums.length) {
        // Добавляем текущий элемент в дек для максимума
        while (
            maxDeque.length > 0 &&
            nums[maxDeque[maxDeque.length - 1]] <= nums[right]
        ) {
            maxDeque.pop();
        }
        maxDeque.push(right);

        // Добавляем текущий элемент в дек для минимума
        while (
            minDeque.length > 0 &&
            nums[minDeque[minDeque.length - 1]] >= nums[right]
        ) {
            minDeque.pop();
        }
        minDeque.push(right);

        // Проверяем текущий подмассив
        while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
            if (maxDeque[0] === left) {
                maxDeque.shift();
            }
            if (minDeque[0] === left) {
                minDeque.shift();
            }
            left++;
        }

        answer = Math.max(answer, right - left + 1);
        right++;
    }

    return answer;
};

console.log(longestSubarray(nums, limit));
