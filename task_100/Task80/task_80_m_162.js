// Пиковый элемент — это элемент, который строго больше своих соседей.
// Учитывая 0 - индексированный целочисленный массив nums, найдите пиковый элемент и верните его индекс.
// Если массив содержит несколько пиков, верните индекс для любого из пиков.
// Вы можете себе представить, что nums[-1] = nums[n] = -∞. Другими словами, элемент всегда считается строго большим, 
// чем соседний элемент, находящийся вне массива.
// Вы должны написать алгоритм, который работает за время O(log n).

//162

nums = [1, 2, 1, 3, 5, 6, 4]
//nums = [1]

function findPeakElement(nums) {

    // if (nums.length === 1) {
    //     return nums[0];
    // }

    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let middle = (start + end) >> 1;
        if (nums[middle] < nums[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start;
};

console.log(findPeakElement(nums));