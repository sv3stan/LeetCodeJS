'use strict';
/*
Вам дан массив nums положительных целых чисел и положительное целое число k.
Подмножество чисел красиво, если оно не содержит двух целых чисел с абсолютной разницей, равной k.
Возвращает количество непустых красивых подмножеств массива nums.
Подмножество nums — это массив, который можно получить, удалив некоторые (возможно, ни одного) элементы из nums. Два подмножества различны тогда и только тогда, когда выбранные индексы для удаления различны.
*/

let nums = [2, 4, 6];
let k = 2;
nums = [4, 2, 5, 9, 10, 3];
k = 1;
nums = [10, 4, 5, 7, 2, 1];
k = 3;
let beautifulSubsets = function (nums, k) {
    let count = 0;
    nums.sort((a, b) => a - b);

    function helper(current, start) {
        for (let i = start; i < nums.length; i++) {
            let isBeautiful = true;

            for (let j = 0; j < current.length; j++) {
                if (Math.abs(nums[i] - current[j]) === k) {
                    isBeautiful = false;
                    break;
                }
            }

            if (isBeautiful) {
                current.push(nums[i]);
                count++;
                console.log(current);
                helper(current, i + 1);
                current.pop();
            }
        }
    }

    helper([], 0);
    return count;
};

console.log(beautifulSubsets(nums, k));
