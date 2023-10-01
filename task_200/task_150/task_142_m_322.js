// Вам дан целочисленный массив монет, представляющий монеты разного номинала,
// и целочисленная сумма, представляющая общую сумму денег.
// Верните наименьшее количество монет, которое вам нужно, чтобы составить эту сумму.
// Если эту сумму денег нельзя компенсировать ни одной комбинацией монет, верните - 1.
// Вы можете предположить, что у вас есть бесконечное количество монет каждого вида
// 322

coins = [1, 2, 5];
amount = 13;

function coinChange(coins, amount) {
    const exchange = Array.from({ length: amount + 1 }).fill(Infinity);
    exchange[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (i - coin >= 0) {
                exchange[i] = Math.min(exchange[i], exchange[i - coin] + 1);
            }
        }
    }

    return exchange[amount] === Infinity ? -1 : exchange[amount];
};

console.log(coinChange(coins, amount));