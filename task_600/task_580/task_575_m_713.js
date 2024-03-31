// Учитывая массив целых чисел nums и целое число k, 
// верните количество смежных подмассивов, в которых 
// произведение всех элементов в подмассиве строго меньше k.
// 713


nums = [10, 5, 2, 6], k = 100

var numSubarrayProductLessThanK = function (nums, k) {

    if (k <= 1) return 0;
    let count = 0;
    let product = 1;
   
    for (let left = 0, right = 0; right < nums.length; right++) {
        product *= nums[right];
        while (product >= k) {
            product /= nums[left++];
        }
        count += right - left + 1;
    }
    return count;

};

console.log(numSubarrayProductLessThanK(nums, k))
