// Учитывая целочисленный массив nums, отсортированный в неубывающем порядке, 
// верните массив квадратов каждого числа, отсортированного в неубывающем порядке.

// 977

nums = [-4, -1, 5, 3, 10]

nums = [-5, -3, -2, -1]

nums = [-7, -3, 2, 3, 11]

var sortedSquares = function (nums) {

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        nums[left] = nums[left] * nums[left];
        nums[right] = nums[right] * nums[right];
        left++;
        right--;
    }
    console.log(nums)
    if (left === right) {
        nums[left] = nums[left] * nums[left];
    }
    return nums.sort((a, b) => a - b);
};

console.log(sortedSquares(nums));