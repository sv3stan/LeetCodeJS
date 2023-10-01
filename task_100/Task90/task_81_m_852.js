// Массив arr является горой, если выполняются следующие свойства:
// длина записи >= 3
// Существует некоторое i с 0 < i < arr.length - 1 такое, что:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
// Для заданного массива гор arr вернуть индекс i такой, что
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[длина обр. - 1].
// Вы должны решить его за O(log(arr.length)) временную сложность.

// 852

//arr = [0, 10, 5, 2];
arr = [0, 1, 0];

function peakIndexInMountainArray(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let middle = (start + end) >> 1;
        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start;
}

console.log(peakIndexInMountainArray(arr));
