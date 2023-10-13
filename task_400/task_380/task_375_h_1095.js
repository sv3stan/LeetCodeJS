// (Эта задача является интерактивной.)
// Возможно, вы помните, что массив arr является горным массивом тогда и 
// только тогда, когда: arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Учитывая горный массив MountainArr, верните минимальный индекс, такой, 
// чтобы MountainArr.get(index) == target. 
// Если такого индекса не существует, верните - 1.
// Вы не можете получить прямой доступ к горному массиву.
// Вы можете получить доступ к массиву только через интерфейс MountainArray:
// MountainArray.get(k) возвращает элемент массива с индексом k(0 - indexed).
// MountainArray.length() возвращает длину массива.
// Заявки, в которых содержится более 100 обращений к MountainArray.get, 
// будут оценены как неправильный ответ.Кроме того, любые решения, 
// пытающиеся обойти судью, приведут к дисквалификации.
// 1095

/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

mountainArr = [1, 2, 3, 4, 5, 3, 1], target = 3

var findInMountainArray = function (target, mountainArr) {
    const n = mountainArr.length();
    let left = 0;
    let right = n - 1;

    function searchLeft(target, mountainArr, left, right) {
        while (left <= right) {
            const middle = (left + right) >> 1;
            const midValue = mountainArr.get(middle);

            if (midValue === target) {
                return middle;
            } else if (midValue < target) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return -1; // Элемент не найден.
    }

    function searchRight(target, mountainArr, left, right) {
        while (left <= right) {
            const middle = (left + right) >> 1;
            const midValue = mountainArr.get(middle);

            if (midValue === target) {
                return middle;
            } else if (midValue < target) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        }

        return -1; // Элемент не найден.
    }

    while (left < right) {
        const middle = (left + right) >> 1;
        const midValue = mountainArr.get(middle);
        const midNextValue = mountainArr.get(middle + 1);

        if (midValue < midNextValue) {
            // Текущий элемент меньше следующего, пик находится справа.
            left = middle + 1;
        } else {
            // Текущий элемент больше следующего, пик находится слева.
            right = middle;
        }
    }

    // Найден индекс пика.
    const peakIndex = left;

    // Выполним бинарный поиск в левой части.
    let result = searchLeft(target, mountainArr, 0, peakIndex);

    if (result !== -1) {
        return result;
    }

    // Выполним бинарный поиск в правой части.
    result = searchRight(target, mountainArr, peakIndex, n - 1);

    return result;
};

console.log(findInMountainArray(target, mountainArr))