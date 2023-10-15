// У вас есть указатель с индексом 0 в массиве размером arrLen.
// На каждом шаге вы можете переместиться на 1 позицию влево, 
// на 1 позицию вправо в массиве или остаться на том же месте
// (Указатель ни в коем случае не должен располагаться за пределами массива).
// Учитывая два целых числа шагов и arrLen, верните количество способов, 
// при которых ваш указатель все еще находится в индексе 0 
// после ровно шагов шагов.Поскольку ответ может быть слишком большим, 
// верните его по модулю 109 + 7.
// 1269

steps = 3, arrLen = 12

var numWays = function (steps, arrLen) {
    const MOD = 1000 * 1000 * 1000 + 7;
    const maxPos = Math.min(steps, arrLen - 1);

    const dp = Array.from({ length: steps + 1 }, () => Array(maxPos + 1).fill(0));
    //const dp = Array.from({ length: steps + 1 }).fill(0).map(() => new Array(maxPos + 1).fill(0));
    dp[0][0] = 1;

    for (let i = 1; i <= steps; i++) {
        for (let j = 0; j <= maxPos; j++) {
            dp[i][j] = dp[i - 1][j];
            if (j > 0) dp[i][j] = (dp[i][j] + dp[i - 1][j - 1]) % MOD;
            if (j < maxPos) dp[i][j] = (dp[i][j] + dp[i - 1][j + 1]) % MOD;
        }
    }

    return dp[steps][0];
};

console.log(numWays(steps, arrLen))