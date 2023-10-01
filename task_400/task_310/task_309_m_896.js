// Массив называется монотонным, если он монотонно возрастает или монотонно убывает.
// Массив nums монотонно увеличивается, если для всех i <= j, nums[i] <= nums[j].
// Массив nums монотонно убывает, если для всех i <= j, nums[i] >= nums[j].
// Учитывая числа целочисленного массива, верните true, 
// если данный массив является монотонным, или false в противном случае.
// 896
nums = [1, 2, 2, 3]
//nums = [6, 5, 4, 4]
//nums = [1, 3, 2]
nums = [1, 1, 0]
var isMonotonic = function (nums) {

    let increasing = false;
    let point = 0;
    let left = 0;
    while (nums[left] === nums[left + 1]) {

        left++;
        point = left;
    }
    console.log(point);
    (nums[point] > nums[point + 1]) ? increasing = false : increasing = true;

    for (let i = point + 1; i < nums.length; i++) {
        if (increasing) {
            if (nums[i - 1] <= nums[i]) return false;
        } else {
            console.log('qqq')
            if (!(nums[i - 1] >= nums[i])) return false;
        }
    }


    return true;

};

console.log(isMonotonic(nums))