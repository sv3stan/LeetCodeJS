// Вам дан целочисленный массив nums.Вы хотите максимизировать количество очков, которые вы получаете, 
// выполняя следующую операцию любое количество раз:
// Выберите любое число nums[i] и удалите его, чтобы заработать очки nums[i].
// После этого вы должны удалить каждый элемент, равный nums[i] - 1, и каждый элемент, равный nums[i] + 1.
// Верните максимальное количество очков, которое вы можете заработать, применив описанную выше операцию несколько раз.
// 740

nums = [2, 2, 3, 3, 3, 4]
//nums = [3, 4, 2]

var deleteAndEarn = function (nums) {
    const hashTable = new Map();
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (hashTable.has(nums[i])) {
            hashTable.set(nums[i], hashTable.get(nums[i]) + 1);
        } else {
            hashTable.set(nums[i], 1);
        }
        maxNum = Math.max(maxNum, nums[i]);
    }
    const dp = new Array(maxNum + 1).fill(0);
    dp[1] = hashTable.get(1) || 0;
    for (let i = 2; i <= maxNum; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + (hashTable.get(i) || 0) * i);
    }
    return dp[maxNum];
};


console.log(deleteAndEarn(nums))