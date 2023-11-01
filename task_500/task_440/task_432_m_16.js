// Учитывая целочисленный массив nums длины n и целочисленную цель, 
// найдите три целых числа в nums, сумма которых наиболее близка к цели.
// Возвращает сумму трех целых чисел.
// Вы можете предположить, что каждый вход будет иметь ровно одно решение.
// 16


nums = [-1, 2, 1, -4], target = 1

var threeSumClosest = function (nums, target) {

    nums.sort((a, b) => a - b);
    let answer = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(answer - target)) answer = sum;
            (sum < target) ? left++ : right--;
        }
    }

    return answer;
};

console.log(threeSumClosest(nums, target))


