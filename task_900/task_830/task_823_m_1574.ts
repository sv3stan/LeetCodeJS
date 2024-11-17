/**
Given an integer array arr, remove a subarray (can be empty) from arr such that the remaining elements in arr are non-decreasing. Return the length of the shortest subarray to remove. A subarray is a contiguous subsequence of the array.
Учитывая целочисленный массив arr, удалите подмассив (может быть пустым) из arr так, чтобы оставшиеся элементы в arr не уменьшались. Возвращает длину самого короткого подмассива, который нужно удалить. Подмассив — это непрерывная подпоследовательность массива.
 */

let arr = [1, 2, 3, 10, 4, 2, 3, 5];

function findLengthOfShortestSubarray(arr: number[]): number {
    const len = arr.length;

    // Найти левую часть, которая уже неубывающая
    let left = 0;
    while (left + 1 < len && arr[left] <= arr[left + 1]) {
        left++;
    }

    // Если массив уже отсортирован
    if (left === len - 1) {
        return 0;
    }

    // Найти правую часть, которая уже неубывающая
    let right = len - 1;
    while (right > 0 && arr[right - 1] <= arr[right]) {
        right--;
    }

    // Минимальная длина подмассива, который нужно удалить
    let minLength = Math.min(len - left - 1, right);

    // Проверить возможность соединения частей
    let i = 0,
        j = right;
    while (i <= left && j < len) {
        if (arr[i] <= arr[j]) {
            minLength = Math.min(minLength, j - i - 1);
            i++;
        } else {
            j++;
        }
    }

    return minLength;
}

console.log(findLengthOfShortestSubarray(arr));

// let head = 0;
// let end = arr.length - 1;
// let indexHead = 0;
// let indexEnd = end;
// while (arr[head] <= arr[head + 1]) {
//     console.log(arr[head] + ' : ' + arr[head + 1]);

//     head++;
//     console.log(head + ' : head');
//     indexHead++;
//     console.log(indexHead + ' : indexHead');
// }

// while (arr[end] > arr[end - 1] && arr[end - 1] >= arr[head - 1]) {
//     console.log(arr[end - 1] + ' : ' + arr[end]);

//     end--;
//     console.log(end + ' : end');
//     indexEnd--;
//     console.log(indexEnd + ' : indexEnd');
// }

// return indexEnd - indexHead;
