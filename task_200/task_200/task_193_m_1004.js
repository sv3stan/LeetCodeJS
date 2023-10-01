// Учитывая двоичный массив nums и целое число k, 
// верните максимальное количество последовательных единиц в массиве, 
// если вы можете перевернуть не более k нулей.
// 1004


nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2
nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], k = 3
nums = [0, 0, 0, 0], k = 0;


var longestOnes = function (nums, k) {
    const length = nums.length - 1;
    let countZero = 0;
    let answer = 0;
    let start = 0;

    for (let i = 0; i <= length; i++) {
        countZero += (nums[i] === 0);
        while (countZero > k) {
            countZero -= (nums[start] == 0);
            start++;
        }
        answer = Math.max(answer, i - start + 1);
    }
    return answer; // Вернуть результат без добавления 1


};

console.log(longestOnes(nums, k))