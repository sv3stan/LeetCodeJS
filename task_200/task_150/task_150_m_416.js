// Учитывая целочисленный массив nums, верните true, если вы можете разделить массив на два подмножества так, 
// чтобы сумма элементов в обоих подмножествах была равна или false в противном случае.
// 416

nums = [1, 5, 11, 5];
var canPartition = function (nums) {
    const n = nums.length;
    const sum = nums.reduce((acc, num) => acc += num, 0);
    if ((sum % 2)) return false;
    console.log(sum)
    const targetSum = sum / 2;
    console.log(targetSum)

    const dp = Array.from({ length: n + 1 }, () => Array(targetSum + 1).fill(false));
    for (let i = 0; i < n; i++) dp[i][0] = true;


    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= targetSum; j++) {
            if (j >= nums[i - 1]) {
                console.log('-----------')
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]];
            } else {
                dp[i][j] = dp[i - 1][j]

            }
        }
    }
    console.log(dp)
    return dp[n][targetSum]
};
console.log(canPartition(nums))