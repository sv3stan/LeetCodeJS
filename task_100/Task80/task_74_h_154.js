// Предположим, что массив длины n, отсортированный в порядке возрастания, вращается от 1 до n раз.
// Например, массив nums = [0, 1, 4, 4, 5, 6, 7] может стать следующим:
// [4, 5, 6, 7, 0, 1, 4], если он был повернут 4 раза.
// [0, 1, 4, 4, 5, 6, 7], если он был повернут 7 раз.
// Обратите внимание, что поворот массива[a[0], a[1], a[2], ..., a[n - 1]]1 раз приводит к массиву[a[n - 1], a[0], а[1], а[2], ..., а[n - 2]].
// Учитывая числовые значения отсортированного повернутого массива, которые могут содержать дубликаты, вернуть минимальный элемент этого массива.
// Вы должны максимально сократить общие шаги операции.

//nums = [2, 2, 2, 0, 0, 1, 1];
nums = [1, 3, 3]; //167 * 193
//nums = [9, 10, 11, 11, 12, 13, 14, 15, 17, 17, 18, 19, 0, 1, 3, 4, 5, 6, 7, 7, 8];

function findMin(nums) {
    // Handling the base case
    if (nums.length === 1) {
        return nums[0];
    }

    let start = 0;
    let end = nums.length - 1;

    // Eliminate duplicate elements from the beginning and end of the array
    while (start < end && nums[start] === nums[start + 1]) {
        start++;
    }
    while (start < end && nums[end] === nums[end - 1]) {
        end--;
    }

    while (start < end) {
        let middle = (start + end) >> 1;
        // search for the minimum element
        if (nums[middle] > nums[end]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }

    return nums[start];
}

console.log(findMin(nums));

// function findMin(nums) {

//     if (nums.length === 1) {
//         return nums[0];
//     }

//     let minIndex;
//     let start = 0;
//     let end = nums.length - 1;
//     let result = [];

//     while (start < end) {
//         minIndex = Math.trunc((start + end) / 2);
//         if (nums[minIndex] < nums[end]) {
//             end = minIndex;
//         } else {
//             start = minIndex + 1;
//         }
//     }
//     result.push(start);

//     start = 0;
//     end = nums.length - 1;

//     while (start < end) {
//         minIndex = Math.trunc((start + end) / 2);
//         if (nums[minIndex] > nums[start]) {
//             end = minIndex - 1;
//         } else {
//             start = minIndex;
//         }
//     }

//     result.push(start);
//     return nums[Math.min(...result)];

// };
