// Учитывая отсортированный массив различных целых чисел и целевое значение, 
// вернуть индекс, если цель найдена.Если нет, верните индекс туда, 
// где он был бы, если бы он был вставлен по порядку.
// Вы должны написать алгоритм со сложностью выполнения O(log n).
//35


//let nums = [1, 2, 2, 2, 3, 4, 5, 6, 8, 8, 8, 8, 8, 9];
//let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let nums = [];
let target = 2;


function searchInsert(nums, target) {

    let min = 0;
    let max = nums.length - 1;
    let index = 0;

    if (nums.length == 0) {
        return -1;
    }
    if (target < nums[min]) {
        return 0;
    }
    if (target > nums[max]) {
        return nums.length;
    }



    while (nums[index] != target) {
        if (target > nums[index - 1] && target < nums[index]) {
            return index;
        }
        index = Math.round((max - min) / 2) + min;
        console.log(index + ' - index - ' + nums[index - 1] + ' - nums[index - 1] - ' + nums[index] + ' - nums[index]');

        if (nums[index] < target) {
            min = Math.round((max - min) / 2) + min;
            console.log(min + ' - min - ');
        } else {
            max = Math.round((max - min) / 2) + min;
            console.log(max + ' - max - ');
        }
    }
    return index;


};

console.log(searchInsert(nums, target))