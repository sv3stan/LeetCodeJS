/**
Вам дан целочисленный массив чисел. Подпоследовательность чисел называется квадратной полосой, если:
Длина подпоследовательности не менее 2, и после сортировки подпоследовательности каждый элемент (кроме первого элемента) представляет собой квадрат предыдущего числа.
Возвращает длину самой длинной квадратной полосы в числах или возвращает -1, если квадратная полоса отсутствует.
Подпоследовательность — это массив, который можно получить из другого массива путем удаления некоторых элементов или их отсутствия без изменения порядка остальных элементов.
 */

let nums = [4, 3, 6, 16, 8, 2];

function longestSquareSubsequence(nums: number[]): number {
    const len = nums.length;
    if (len < 2) return -1;

    const numSet = new Set<number>(nums);
    let maxLen = 0;

    const lenMap: Map<number, number> = new Map();

    for (let i = 0; i < len; i++) {
        const currentNum = nums[i];

        if (lenMap.has(currentNum)) {
            continue; // Если мы уже обработали этот элемент
        }

        let length = 1; // Начинаем с длины 1
        let nextNum = currentNum * currentNum;

        while (numSet.has(nextNum)) {
            length++;
            nextNum *= nextNum; // Переходим к следующему квадрату
        }

        if (length > 1) {
            maxLen = Math.max(maxLen, length);
            lenMap.set(currentNum, length);
        }
    }

    return maxLen > 1 ? maxLen : -1;
}

console.log(longestSquareSubsequence(nums));
