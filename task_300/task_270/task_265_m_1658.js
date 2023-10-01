// Вам дан целочисленный массив nums и целое число x.За одну операцию вы можете удалить самый левый
// или самый правый элемент из массива nums и вычесть его значение из x.Обратите внимание,
// что это изменяет массив для будущих операций.
// Возвращайте минимальное количество операций, позволяющих уменьшить x ровно до 0, если это возможно,
// в противном случае верните - 1.
// 1658

const util = require('util');
util.inspect.defaultOptions.depth = null;

nums = [3, 2, 20, 1, 1, 3], x = 10
//nums = [1, 1, 4, 2, 3], x = 5
//nums = [5, 6, 7, 8, 9], x = 4


nums = [5207, 5594, 477, 6938, 8010, 7606, 2356, 6349, 3970, 751, 5997, 6114, 9903, 3859, 6900, 7722, 2378, 1996, 8902, 228, 4461, 90, 7321, 7893, 4879, 9987, 1146, 8177, 1073, 7254, 5088, 402, 4266, 6443, 3084, 1403, 5357, 2565, 3470, 3639, 9468, 8932, 3119, 5839, 8008, 2712, 2735, 825, 4236, 3703, 2711, 530, 9630, 1521, 2174, 5027, 4833, 3483, 445, 8300, 3194, 8784, 279, 3097, 1491, 9864, 4992, 6164, 2043, 5364, 9192, 9649, 9944, 7230, 7224, 585, 3722, 5628, 4833, 8379, 3967, 5649, 2554, 5828, 4331, 3547, 7847, 5433, 3394, 4968, 9983, 3540, 9224, 6216, 9665, 8070, 31, 3555, 4198, 2626, 9553, 9724, 4503, 1951, 9980, 3975, 6025, 8928, 2952, 911, 3674, 6620, 3745, 6548, 4985, 5206, 5777, 1908, 6029, 2322, 2626, 2188, 5639]
x = 565610
// nums = [1, 2, 3, 4, 5];
// x = 10;
var minOperations = function (nums, x) {
    
    const targetSum = nums.reduce((acc, num) => acc + num, 0) - x;

    if (targetSum < 0) return -1; 

    let left = 0;
    let currentSum = 0;
    let minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        while (currentSum > targetSum) {
            currentSum -= nums[left];
            left++;
        }

        if (currentSum === targetSum) minLength = Math.min(minLength, nums.length - (right - left + 1));
    }

    return minLength === Infinity ? -1 : minLength;
};


console.log(minOperations(nums, x))












    // let deleteSum = 0;
    // let count = 0;
    // // console.log(JSON.stringify(nums, null, 2))
    // while (deleteSum !== x) {

    //     if (nums[0] > x - deleteSum) {
    //         nums.shift();
    //         continue;
    //     }
    //     if (nums[nums.length - 1] > x - deleteSum) {
    //         nums.pop();
    //         continue;
    //     }


    //     if (nums[0] > nums[nums.length - 1]) {
    //         console.log('if - ' + nums[0] + ' - nums[0] - ' + nums[nums.length - 1] + ' - nums[nums.length - 1]  -')
    //         deleteSum += nums.shift();
    //         count++;
    //     } else {
    //         console.log('else - ' + nums[0] + ' - nums[0] - ' + nums[nums.length - 1] + ' - nums[nums.length - 1]  -')
    //         deleteSum += nums.pop();
    //         count++
    //     }

    //     console.log(nums)
    //     console.log(deleteSum + ' - deleteSum - ' + count + ' - count - ')
    //     //console.log(count)  
    //     if (nums.length === 0) return count = -1;
    // }
    // return count;
