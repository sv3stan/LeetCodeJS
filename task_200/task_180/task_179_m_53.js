// Учитывая целочисленный массив чисел, найдите подмассив с наибольшей суммой и вернуть ее сумму.
// 53


nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
nums = [5, 4, -1, 7, 8]

var maxSubArray = function (nums) {

    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        console.log(i + ' - i')
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(maxSum, currentSum);
        console.log(currentSum + '- currentSum - ' + maxSum + ' - maxSum')

    }

    return maxSum;
};

console.log(maxSubArray(nums))