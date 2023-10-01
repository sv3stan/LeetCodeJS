// Дан массив целых чисел nums и целое число k, вернуть k - й по величине элемент в массиве.
// Обратите внимание, что это k - й по величине элемент в отсортированном порядке, а не k - й отдельный элемент.
// Можете ли вы решить ее без сортировки ?
// 215

let nums = [3, 2, 3, 1, 2, 4, 5, 5, 5, 6];
let k = 4;
// nums = [3, 2, 1, 5, 6, 4];
// k = 2;

function findKthLargest(nums, k) {

    nums.sort((a, b) => b - a);
    return nums[k - 1];


};

console.log(findKthLargest(nums, k))
// function partition(nums, low, high) {
//     const pivot = nums[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//         if (nums[j] < pivot) {
//             i++;
//             [nums[i], nums[j]] = [nums[j], nums[i]]; // Меняем местами элементы
//         }
//     }

//     [nums[i + 1], nums[high]] = [nums[high], nums[i + 1]]; // Помещаем опорный элемент на своё место
//     return i + 1;
// }

// function quickSelect(nums, low, high, k) {
//     if (low <= high) {
//         console.log(nums + ' - nums - ' + low + ' - low- ' + high + ' - high')
//         const pivotIndex = partition(nums, low, high);
//         console.log(pivotIndex)
//         if (pivotIndex === k) {
//             console.log('+++++++')
//             console.log(nums)
//             console.log(pivotIndex + ' - pivotIndex- ' + nums[pivotIndex])
//             return nums[pivotIndex];
//         } else if (pivotIndex < k) {
//             console.log('if - ' + nums + ' - nums - ' + pivotIndex + ' - pivotIndex- ' + high + ' - high - ' + k + ' - k')
//             return quickSelect(nums, pivotIndex + 1, high, k);
//         } else {
//             console.log('else - ' + nums + ' - nums - ' + pivotIndex + ' - pivotIndex- ' + high + ' - high - ' + k + ' - k')
//             return quickSelect(nums, low, pivotIndex - 1, k);
//         }
//     }
// }

// function findMaxElement(nums, k) {
//     //  const k = nums.length - 1; // Индекс максимального элемента
//     return quickSelect(nums, 0, nums.length - 1, k);
// }


// console.log(findMaxElement(nums, k))
//console.log(findKthLargest(nums, k))








// Велик соблазн воспользоваться простой сортировкой.
// Но соблазн повысить свои навыки и решить задачу методом 'Quick select' еще больше.