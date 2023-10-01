// Учитывая массив различных целых чисел nums и целевое целое число target, 
// вернуть количество возможных комбинаций, которые в сумме дают target.
// Тестовые примеры генерируются таким образом, чтобы ответ мог уместиться в 32 - битном целом числе.
// 377

nums = [1, 2, 3]; target = 5;

//nums = [9], target = 3
//nums = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//nums = [3, 4, 5, 6, 7, 8, 9, 10]
//target = 10
function combinationSum4(nums, target) {

    const dp = Array.from({ length: target + 1 }).fill(0);

    dp[0] = 1
    console.log(dp)


    for (let i = 1; i <= target; i++) {
        for (const num of nums) {
            if (i - num >= 0) {
                console.log(i + ' - i - ' + num + ' -num - ' + dp[i - num] + ' - dp[i - num] - ')

                dp[i] += dp[i - num];
                console.log(dp)
            }
        }
    }

    return dp[target]
};

console.log(combinationSum4(nums, target))