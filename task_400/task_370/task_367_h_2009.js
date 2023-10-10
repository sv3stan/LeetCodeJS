// Вам дан целочисленный массив чисел.За одну операцию вы можете 
// заменить любой элемент числа на любое целое число.
// nums считается непрерывным, если выполняются оба следующих условия:
// Все элементы в числах уникальны.
// Разница между максимальным и минимальным элементом в nums равна nums.length - 1.
// Например, nums = [4, 2, 5, 3] является непрерывным, 
// но nums = [1, 2, 3, 5, 6] не является непрерывным.
// Верните минимальное количество операций, чтобы сделать числа непрерывными.
// 2009

nums = [1, 2, 2, 3, 3, 5, 6]
//nums = [1, 2, 3, 5, 6]
nums = [41, 33, 29, 33, 35, 26, 47, 24, 18, 28]
var minOperations = function (nums) {
    const length = nums.length;
    const sorted = [...new Set(nums)].sort((a, b) => a - b);
    let answer = length;
    function search(arr, target) {
        let left = 0;
        let right = arr.length;
        while (left < right) {
            const middle = (left + right) >> 1;
            if (arr[middle] <= target) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }
        return left;
    }

    for (let i = 0; i < sorted.length; i++) {
        const left = sorted[i];
        const right = left + length - 1;
        const j = search(sorted, right);
        const count = j - i;
        answer = Math.min(answer, length - count);
    }

    return answer;

};


console.log(minOperations(nums))