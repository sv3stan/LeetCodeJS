// Вам дан целочисленный массив nums, состоящий из n элементов, и целое число k.
// Найдите непрерывный подмассив длиной k, имеющий максимальное среднее значение, 
// и верните это значение.Принимается любой ответ с ошибкой расчета менее 10 - 5.
// 643

nums = [1, 12, -5, -6, 50, 3], k = 4
//nums = [5], k = 1
//nums = [-1], k = 1
// nums = [0, 1, 1, 3, 3], k = 4

var findMaxAverage = function (nums, k) {
    let lengthNums = nums.length;
    let maxAvverage = -Infinity;
    if (nums.length === 1) return nums[0] / k;
    const selectedItem = nums.slice(0, k);
    let selectedSum = selectedItem.reduce((sum, item) => sum += item, 0);
    for (let i = 0; i + k <= lengthNums; i++) {
        console.log(selectedItem)
        const averrage = selectedSum / k;
        maxAvverage = Math.max(maxAvverage, averrage);
        console.log(nums[i] + ' -  nums[i] - ' + nums[i + k] + ' - nums[i + k]')
        selectedSum = selectedSum - nums[i];
        console.log(selectedSum + ' - selectedSum ')
        selectedSum = selectedSum + nums[i + k];
        console.log(selectedSum + ' - selectedSum ')
    }
    return maxAvverage;
};

console.log(findMaxAverage(nums, k))