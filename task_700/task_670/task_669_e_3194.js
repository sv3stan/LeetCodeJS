/*
У вас есть массив средних чисел с плавающей запятой, который изначально пуст. Вам дан массив nums из n целых чисел, где n четное.
Вы повторяете следующую процедуру n/2 раза:
Удалите самый маленький элемент minElement и самый большой элемент maxElement из nums.
Добавьте (minElement + maxElement)/2 к средним значениям.
Возвращает минимальный элемент в средних значениях.
*/

nums = [7, 8, 3, 4, 15, 13, 4, 1];

let minimumAverage = function (nums) {
    nums.sort((a, b) => a - b);
    let min = Infinity;
    const n = nums.length / 2;
    let i = 0;
    while (i < n) {
        min = Math.min(min, (nums.shift() + nums.pop()) / 2);
        i++;
    }

    return min;
};

console.log(minimumAverage(nums));
