/**
Алиса и Боб продолжают свои игры с кучами камней.  Есть несколько кучек, расположенных в ряд, и в каждой кучке есть целое положительное число камней piles[i].  Цель игры - закончить ее с наибольшим количеством камней.
Алиса и Боб ходят по очереди, причем Алиса начинает первой.  Изначально M = 1.
В свой ход каждый игрок может взять все камни из первых X оставшихся кучек, где 1 <= X <= 2M.  Затем мы устанавливаем M = max(M, X).
Игра продолжается до тех пор, пока все камни не будут взяты.
Предполагая, что Алиса и Боб играют оптимально, верните максимальное количество камней, которое может получить Алиса.
 */

let piles = [2, 7, 9, 4, 4];

let stoneGameII = function (piles) {
    const n = piles.length;
    const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));

    const prefixSum = new Array(n + 1).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        prefixSum[i] = prefixSum[i + 1] + piles[i];
    }

    for (let i = 0; i <= n; i++) {
        dp[i][n] = prefixSum[i];
    }

    for (let index = n - 1; index >= 0; index--) {
        for (let maxCurrent = n - 1; maxCurrent >= 1; maxCurrent--) {
            for (let X = 1; X <= 2 * maxCurrent && index + X <= n; X++) {
                dp[index][maxCurrent] = Math.max(
                    dp[index][maxCurrent],
                    prefixSum[index] - dp[index + X][Math.max(maxCurrent, X)],
                );
            }
        }
    }

    return dp[0][1];
};

console.log(stoneGameII(piles));
