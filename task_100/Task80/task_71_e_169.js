// Учитывая массив nums размера n, вернуть мажоритарный элемент.
// Элемент большинства — это элемент, который встречается более ⌊n / 2⌋ раз.
// Вы можете предположить, что в массиве всегда существует мажоритарный элемент.
//169

nums = [2, 2, 1, 1, 1, 2, 2];
nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];

var majorityElement = function (nums) {
    let candidate = null;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
            count = 1;
        } else if (candidate === nums[i]) {
            count++;
        } else {
            count--;
        }
        console.log(i + ' - i - ' + candidate + ' - candidate - ' + nums[i] + ' - nums[i] -' + count + ' - count')
    }

    return candidate;

};

console.log(majorityElement(nums));