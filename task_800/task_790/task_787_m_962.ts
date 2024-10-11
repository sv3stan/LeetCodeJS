/*
Скат в целочисленном массиве nums — это пара (i, j), для которой i < j и nums[i] <= nums[j]. Ширина такого пандуса j - i.
Учитывая целочисленный массив чисел, верните максимальную ширину пандуса в числах. Если в числах нет линейного изменения, верните 0. * 
 */

function maxWidthRamp(nums: number[]): number {
    let n = nums.length;
    let indices = Array.from({ length: n }, (_, i) => i); // Массив индексов [0, 1, 2, ..., n-1]

    // Сортируем индексы по значениям массива nums
    indices.sort((a, b) => nums[a] - nums[b]);

    let maxRamp = 0;
    let minIndex = indices[0]; // Минимальный индекс на данный момент

    // Ищем максимальную ширину рампы
    for (let i = 1; i < n; i++) {
        let currIndex = indices[i];
        if (currIndex > minIndex) {
            // Если текущий индекс больше минимального, обновляем максимальную ширину
            maxRamp = Math.max(maxRamp, currIndex - minIndex);
        } else {
            // Обновляем минимальный индекс
            minIndex = currIndex;
        }
    }

    return maxRamp;
}
