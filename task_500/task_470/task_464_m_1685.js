// Вам дан целочисленный массив чисел, отсортированный в порядке неубывания.
// Создайте и верните результат целочисленного массива той же длины, что и nums, 
// так что result[i] равен сумме абсолютных разностей между nums[i] 
// и всеми остальными элементами массива.
// Другими словами, result[i] равен sum(| nums[i] - nums[j] |), 
// где 0 <= j < nums.length и j != i(индексировано 0).
// 1685

nums = [2, 3, 5]
nums = [4, 5, 6, 7]
nums = [1, 4, 6, 8, 12, 18, 21]
var getSumAbsoluteDifferences = function (nums) {

    let n = nums.length;
    let totalSum = nums.reduce((acc, item) => acc += item, 0)

    let leftSum = 0;
    const ans = new Int32Array(n);

    for (let i = 0; i < n; i++) {
        let rightSum = totalSum - leftSum - nums[i];


        let leftSumTotal = i * nums[i] - leftSum;
        let rightSumTotal = rightSum - (n - i - 1) * nums[i];

        ans[i] = (leftSumTotal + rightSumTotal);
        leftSum += nums[i];
    }

    return ans;
};

console.log(getSumAbsoluteDifferences(nums))