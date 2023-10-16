// Учитывая массив целых чисел nums, отсортированный в порядке 
// возрастания, и целочисленную цель, напишите функцию для поиска 
// цели в nums.Если цель существует, верните ее индекс.
// В противном случае верните - 1.
// Вы должны написать алгоритм со сложностью выполнения O(log n).
// 704


nums = [-1, 0, 3, 5, 9, 12], target = 19
nums = [-1, 0, 3, 5, 9, 12], target = 0


var search = function (nums, target) {

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = left + Math.floor((right - left) >> 1);
        if (nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;

};


console.log(search(nums, target))