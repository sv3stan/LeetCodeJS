/**
У вас есть k списков отсортированных целых чисел в порядке неубывания. Найдите наименьший диапазон, включающий хотя бы одно число из каждого из k списков.
Мы определяем, что диапазон [a, b] меньше диапазона [c, d], если b - a < d - c, или a < c, если b - a == d - c.
 */
let nums = [
    [4, 10, 15, 24, 26],
    [0, 9, 12, 20],
    [5, 18, 22, 30],
];
function smallestRange(nums: number[][]): number[] {
    const flat = [];

    // Создаем плоский массив с меткой списка, из которого взят элемент
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            flat.push({ value: nums[i][j], listIndex: i });
        }
    }

    // Сортируем по значению
    flat.sort((a, b) => a.value - b.value);

    let count = new Map(); // Счетчик элементов из каждого списка
    let left = 0; // Левый указатель
    let rangeStart = -Infinity,
        rangeEnd = Infinity;
    let validCount = 0; // Количество списков, для которых есть хотя бы один элемент

    for (let right = 0; right < flat.length; right++) {
        const rightElem = flat[right];
        const listIndex = rightElem.listIndex;

        // Увеличиваем счетчик для списка
        count.set(listIndex, (count.get(listIndex) || 0) + 1);

        // Если это первый элемент из данного списка, увеличиваем validCount
        if (count.get(listIndex) === 1) {
            validCount++;
        }

        // Когда все списки покрыты хотя бы одним элементом
        while (validCount === nums.length) {
            const leftElem = flat[left];
            const currentRangeStart = leftElem.value;
            const currentRangeEnd = rightElem.value;

            // Обновляем наименьший диапазон
            if (currentRangeEnd - currentRangeStart < rangeEnd - rangeStart) {
                rangeStart = currentRangeStart;
                rangeEnd = currentRangeEnd;
            }

            // Сдвигаем левый указатель
            const leftListIndex = leftElem.listIndex;
            count.set(leftListIndex, count.get(leftListIndex) - 1);

            // Если из данного списка больше нет элементов в окне, уменьшаем validCount
            if (count.get(leftListIndex) === 0) {
                validCount--;
            }

            left++; // Двигаем левый указатель вправо
        }
    }

    return [rangeStart, rangeEnd];
}

console.log(smallestRange(nums)); // [0, 24]
