// Существует целочисленный массив nums, отсортированный в порядке неубывания(не обязательно с различными значениями).
// Перед передачей в вашу функцию nums вращается с неизвестным опорным индексом k(0 <= k < nums.length), 
// так что результирующий массив равен[nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]](с индексом 0).
// Например, [0, 1, 2, 4, 4, 4, 5, 6, 6, 7] можно повернуть с опорным индексом 5 и превратить в[4, 5, 6, 6, 7, 0, 1, 2, 4, 4].
// Учитывая массив nums после поворота и целочисленную цель, вернуть true, если цель находится в nums, или false, если она не в nums.
// Вы должны максимально сократить общие шаги операции.
// 81
//nums = [9, 10, 11, 12, 13, 14, 15, 17, 18, 0, 1, 2, 4, 5, 6, 7, 8,];
//nums = [2, 5, 6, 0, 0, 1, 2]
nums = [1, 0, 1, 1, 1]
target = 0;
function search(nums, target) {
    if (nums.length === 0) {
        return false;
    }
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const middle = (left + right) >> 1;
        if (nums[middle] === target) {
            return true;
        }
        if (nums[left] === nums[middle] && nums[middle] === nums[right]) {
            left++;
            right--;
        } else if (nums[left] <= nums[middle]) {
            if (nums[left] <= target && target < nums[middle]) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (nums[middle] < target && target <= nums[right]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    return false;


};

console.log(search(nums, target));