// Вам дан массив цен, где цены[i] — цена данной акции на i-й день.
// Вы хотите максимизировать свою прибыль, выбрав один день для
// покупки одной акции и выбрав другой день в будущем для продажи этой акции.
// Верните максимальную прибыль, которую вы можете получить от этой сделки.
// Если вы не можете получить никакой прибыли, верните 0.
// 121


//prices = [7, 1, 4, 3, 5, 7, 2];
prices = [1, 2];
//prices = [7, 6, 4, 3, 1];
//prices = [7, 1, 5, 3, 6, 4];
// var maxProfit = function (prices) {
//     let maxDiff = 0;
//     for (let i = prices.length - 1; i > 0; i--) {
//         console.log(prices[i] + ' ---------- prices[i]' + i);
//         for (let j = i - 1; j > 0; j--) {
//             //for (const cost of prices) {
//             console.log(prices[j] + ' ---------- prices[j]' + j);
//             if (prices[i] - prices[j] > maxDiff) {
//                 maxDiff = prices[i] - prices[j];
//             }
//         }
//     }
//     console.log(maxDiff);
// };

var maxProfit = function (prices) {
    let maxProfit = 0;
    let minPrice = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            if (prices[i] - minPrice > maxProfit) {
                maxProfit = prices[i] - minPrice;
            }
        }
    }
    //return maxProfit;
    console.log(maxProfit);
};

maxProfit(prices);
