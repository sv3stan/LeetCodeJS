﻿// Вам дан двумерный целочисленный массив с нулевым индексом.
// Изначально ваш счет равен 0. Выполняйте следующие операции, 
// пока матрица не станет пустой:
// Из каждой строки матрицы выберите наибольшее число и удалите его.
// В случае ничьей не имеет значения, какое число будет выбрано.
// Определите наибольшее число среди всех, удаленных на шаге 1. 
// Добавьте это число к своему счету. Вернуть окончательный результат
// 2679


nums = [[7, 2, 1], [6, 4, 2], [6, 5, 3], [3, 2, 1]];

var matrixSum = function (nums) {
    let answer = 0;

    for (let i = 0; i < nums.length; i++) nums[i].sort((a, b) => a - b);


    for (let i = 0; i < nums[0].length; i++) {
        let max = 0;
        for (let j = 0; j < nums.length; j++) max = Math.max(nums[j][i], max);
        answer += max;
    }

    return answer;
};

console.log(matrixSum(nums))