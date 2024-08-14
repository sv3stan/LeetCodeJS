/**
Расстояние пары целых чисел a и b определяется как абсолютная разница между a и b.
Учитывая целочисленный массив nums и целое число k, верните k-е наименьшее расстояние среди всех пар nums[i] и nums[j], где 0 <= i < j < nums.length.
 */

let nums = [1, 3, 1];
let k = 1;

let smallestDistancePair = function (nums, k) {
    const check = mid => {
        let count = 0;
        let left = 0;
        for (let right = 0; right < nums.length; right++) {
            while (nums[right] - nums[left] > mid) {
                left++;
            }
            count += right - left;
        }
        return count >= k;
    };

    nums.sort((a, b) => a - b);

    let left = 0;
    let right = nums[nums.length - 1] - nums[0];
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (check(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};

console.log(smallestDistancePair(nums, k));
