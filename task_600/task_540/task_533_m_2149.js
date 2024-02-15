// Вам дан целочисленный массив nums с нулевым индексом четной длины, 
// состоящий из равного количества положительных и отрицательных целых чисел.
// Вам следует переставить элементы nums так, чтобы измененный массив соответствовал заданным условиям:
// Каждая последовательная пара целых чисел имеет противоположные знаки.
// Для всех целых чисел одного знака сохраняется порядок их присутствия в числах.
// Переставленный массив начинается с положительного целого числа.
// Верните измененный массив после перестановки элементов, чтобы удовлетворить вышеупомянутым условиям.

// 2149


nums = [3, 1, 2, -5, -2, -4]



var rearrangeArray = function (nums) {

    const n = nums.length;
    const result = Array.from({ length: n });
    let pointerPositive = 0;
    let pointerNegative = 1;

    for (let i = 0; i < n; i++) {

        if (nums[i] > 0) {
            result[pointerPositive] = nums[i];
            pointerPositive += 2;
        } else {
            result[pointerNegative] = nums[i];
            pointerNegative += 2;
        }

    }


    return result;
};


console.log(rearrangeArray(nums));