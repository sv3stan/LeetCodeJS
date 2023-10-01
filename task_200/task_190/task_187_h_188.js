// Вам дан целочисленный массив цен, где цены[i] — цена данной акции на i-й день, и целое число k.
// Найдите максимальную прибыль, которую вы можете получить. Вы можете совершить не более k транзакций: 
// т. е. вы можете купить не более k раз и продать не более k раз.
// Примечание. Вы не можете совершать несколько транзакций одновременно (т. е. вы должны продать акции, прежде чем купить их снова).
// 188


k = 2, prices = [3, 2, 6, 5, 0, 3]
k = 2, prices = [6, 1, 3, 2, 4, 7]
//k = 2, prices = [0, 2, 5, 6, 3, 9]
//k = 2, prices = [3, 3, 5, 0, 0, 3, 1, 4]

//k = 2, prices = [1, 2, 4]

var maxProfit = function (k, prices) {
    const length = prices.length;
    if (length === 0) return 0;

    // Инициализация dpBuy и dpSell массивов
    const dpBuy = new Array(length).fill(0).map(() => new Array(k + 1).fill(-Infinity));
    const dpSell = new Array(length).fill(0).map(() => new Array(k + 1).fill(0));

    // Инициализация начальных значений
    dpBuy[0][0] = -prices[0];
    dpSell[0][0] = 0;

    for (let j = 1; j <= k; j++) {
        dpBuy[0][j] = -prices[0];
        dpSell[0][j] = 0;
    }
    console.log(dpBuy)
    console.log(dpSell)
    // Динамическое программирование
    for (let i = 1; i < length; i++) {
        console.log(' ------------------------ ');
        dpBuy[i][0] = Math.max(dpBuy[i - 1][0], -prices[i]);
        console.log(dpBuy)
        for (let j = 1; j <= k; j++) {
            console.log(' ++++++++++++++++++++  ');
            dpBuy[i][j] = Math.max(dpBuy[i - 1][j], dpSell[i - 1][j - 1] - prices[i]);
            dpSell[i][j] = Math.max(dpSell[i - 1][j], dpBuy[i - 1][j] + prices[i]);
            console.log(dpBuy)
            console.log(dpSell)
        }
    }

    return dpSell[length - 1][k];
};

console.log(maxProfit(k, prices))

































//var maxProfit = function (k, prices) {
//     let answer = 0;
//     if (prices.length === 1) return 0;
//     const dp = Array.from({ length: prices.length }).fill(0);

//     for (let i = 0; i < prices.length; i++) {
//         for (let j = i + 1; j < prices.length; j++) {

//             console.log(prices[i] + ' - prices[i] - ' + prices[j] + ' - prices[j] -')
//             dp[i] = Math.max(dp[i], prices[j] - prices[i])

//             console.log(dp)
//         }
//     }
//     dp.sort((a, b) => b - a)
//     for (let i = 0; i < k; i++) {
//         answer += dp[i]
//     }

//     console.log(dp)
//     return answer;
// };
