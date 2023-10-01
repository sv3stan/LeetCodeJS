// Вам дан целочисленный массив cost, где cost[i] — стоимость i - й ступени лестницы.
// Как только вы заплатите стоимость, вы можете подняться на одну или две ступеньки.
// Вы можете начать либо с шага с индексом 0, либо с шага с индексом 1.
// Верните минимальную стоимость, чтобы достичь вершины этажа.
// 746

cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
cost = [10, 15, 20]

function minCostClimbingStairs(cost) {
    const length = cost.length;
    const dp = Array.from({ length: length }).fill(0);
    dp[0] = cost[0];
    dp[1] = cost[1];
    console.log(dp)


    for (let i = 2; i < length; i++) {
        //  if (cost[i + 1] < cost[i + 2]) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        console.log(dp)
        // }
    }


    console.log(dp)
    return Math.min(dp[length - 1], dp[length - 2]);
};

console.log(minCostClimbingStairs(cost))