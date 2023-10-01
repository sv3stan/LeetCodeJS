// Вам дан целочисленный массив nums с индексом 0 и целое число p.Найдите p пар индексов чисел, таких, 
// что максимальная разница между всеми парами минимальна.Кроме того, убедитесь, 
// что ни один индекс не встречается более одного раза среди пар p.
// Обратите внимание, что для пары элементов с индексами i и j разность этой пары равна | nums[i] - nums[j] |, 
// где | x | представляет собой абсолютное значение x.
// Возвращает минимальную максимальную разницу между всеми p парами.Мы определяем максимум пустого множества равным нулю.

//2616
//nums = [10, 1, 2, 7, 1, 3];
nums = [3, 4, 2, 3, 2, 1, 2]
p = 3;
function minimizeMax(nums, p) {
    function canFormPairs(diff) {
        pairs = 0;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i + 1] - nums[i] <= diff) {
                pairs++;
                i++;
            }
        }
        return pairs >= p
    }

    nums.sort((a, b) => a - b);

    left = 0
    right = nums[nums.length - 1] - nums[0];
    result = -1

    while (left <= right) {
        const middle = (left + right) >> 1;
        if (canFormPairs(middle)) {
            result = middle;
            right = middle - 1;
        } else {
            left = middle + 1
        }

    }
    return result
};

console.log(minimizeMax(nums, p));