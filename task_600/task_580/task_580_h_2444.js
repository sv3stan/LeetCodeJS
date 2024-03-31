// Вам дан целочисленный массив nums и два целых числа minK и maxK.
// Подмассив чисел с фиксированной привязкой — это подмассив,
// который удовлетворяет следующим условиям:
// Минимальное значение в подмассиве равно minK.
// Максимальное значение в подмассиве равно maxK.
// Возвращает количество подмассивов с фиксированной привязкой.
// Подмассив — это непрерывная часть массива.

// 244

(nums = [1, 3, 5, 2, 7, 5]), (minK = 1), (maxK = 5);

var countSubarrays = function (nums, minK, maxK) {
    let result = 0;
    let err = -1;
    let left = -1;
    let right = -1;

    for (let i = 0; i < nums.length; ++i) {
        if (!(minK <= nums[i] && nums[i] <= maxK)) {
            err = i;
        }

        if (nums[i] === minK) {
            left = i;
        }

        if (nums[i] === maxK) {
            right = i;
        }

        result += Math.max(0, Math.min(left, right) - err);
    }

    return result;
};

console.log(countSubarrays(nums, minK, maxK));
