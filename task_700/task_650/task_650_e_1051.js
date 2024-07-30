﻿/*
Школа пытается ежегодно фотографировать всех учеников. Учащимся предлагается встать в одну шеренгу в порядке неубывания роста. Пусть этот порядок будет представлен ожидаемым целочисленным массивом, где ожидаемый[i] — ожидаемый рост i-го ученика в строке.
Вам дан целочисленный массив heights, представляющий текущий порядок, в котором стоят ученики. Каждая высота[i] — это рост i-го ученика в строке (с индексом 0).
Возвращает количество индексов, в которых высоты[i] != ожидаемые[i].
*/
let heights = [1, 1, 4, 2, 1, 3];

let heightChecker = function (heights) {
    let temp = [...heights].sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== temp[i]) {
            count++;
        }
    }

    return count;
};

console.log(heightChecker(heights));