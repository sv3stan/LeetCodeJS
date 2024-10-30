/**
Возможно, вы помните, что массив arr является горным массивом тогда и только тогда, когда:
arr.length >= 3
Существует некоторый индекс i (с индексом 0) с 0 < i < arr.length - 1 такой, что:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Учитывая целочисленный массив nums, верните минимальное количество элементов, которые нужно удалить, чтобы сделать nums массивом-горой.
 */

let nums = [2, 1, 1, 5, 6, 2, 3, 1];

function minimumMountainRemovals(nums: number[]): number {
    const len = nums.length;
    const inc = Array(len).fill(1); // Длина возрастающей последовательности
    const dec = Array(len).fill(1); // Длина убывающей последовательности

    // Заполняем inc - длины возрастания
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                inc[i] = Math.max(inc[i], inc[j] + 1);
            }
        }
    }

    // Заполняем dec - длины убывания
    for (let i = len - 2; i >= 0; i--) {
        for (let j = len - 1; j > i; j--) {
            if (nums[i] > nums[j]) {
                dec[i] = Math.max(dec[i], dec[j] + 1);
            }
        }
    }

    // Ищем максимальную длину горной подпоследовательности
    let maxLength = 0;
    for (let i = 1; i < len - 1; i++) {
        if (inc[i] > 1 && dec[i] > 1) {
            // `i` может быть вершиной горы
            maxLength = Math.max(maxLength, inc[i] + dec[i] - 1);
        }
    }

    // Минимальное количество удалений
    return len - maxLength;
}

console.log(minimumMountainRemovals(nums));
