// У вас есть n кубиков, и каждый кубик имеет k граней, пронумерованных от 1 до k.
// Учитывая три целых числа n, k и цель, верните количество возможных 
// способов(из всех kn способов) бросить игральную кость так, 
// чтобы сумма выпавших лицевой стороной вверх чисел равнялась цели.
// Поскольку ответ может быть слишком большим, верните его по модулю 109 + 7.

// 1155


n = 2, k = 6, target = 7;

n = 30, k = 30, target = 500
var numRollsToTarget = function (n, k, target) {

    const mod = 1000 * 1000 * 1000 + 7;
    let dp = new Int32Array(target + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= n; ++i) {
        const newDp = new Int32Array(target + 1).fill(0);

        for (let j = 1; j <= target; ++j) {
            for (let x = 1; x <= k && j - x >= 0; ++x) {
                newDp[j] = (newDp[j] + dp[j - x]) % mod;
            }
        }

        dp = newDp;
    }

    return dp[target];


};


console.log(numRollsToTarget(n, k, target))