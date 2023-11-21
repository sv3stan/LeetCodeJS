// Частота элемента — это количество раз, когда он встречается в массиве.
// Вам дан целочисленный массив nums и целое число k.За одну операцию вы 
// можете выбрать индекс чисел и увеличить элемент по этому индексу на 1.
// Возвращает максимально возможную частоту элемента после выполнения не более k операций.
// 1838

nums = [1, 4, 8, 13], k = 5;

var maxFrequency = function (nums, k) {

    nums.sort((a, b) => a - b);
    let left = 0;
    let answer = 0;
    let current = 0;

    for (let right = 0; right < nums.length; right++) {
        let target = nums[right];
        current += target;
        while ((right - left + 1) * target - current > k) current -= nums[left++];
        answer = Math.max(answer, right - left + 1);
    }

    return answer;

};

console.log(maxFrequency(nums, k))