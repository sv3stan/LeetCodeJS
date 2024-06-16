/* 
Вам дан целочисленный массив чисел. За один ход вы можете выбрать индекс i, где 0 <= i < nums.length, и увеличить nums[i] на 1.
Возвращает минимальное количество ходов, чтобы каждое значение в nums было уникальным.
Тестовые случаи генерируются таким образом, чтобы ответ умещался в 32-битное целое число.
 */

let nums = [3, 2, 1, 2, 1, 7];

let minIncrementForUnique = function (nums) {
    let countInc = 0;

    nums.sort((a, b) => a - b);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            countInc += nums[i - 1] - nums[i] + 1;
            nums[i] = nums[i - 1] + 1;
        }
    }
    return countInc;
};

console.log(minIncrementForUnique(nums));
