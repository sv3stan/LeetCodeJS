// Вам дан массив цен, где цены[i] — цена данной акции на i - й день.
// Найдите максимальную прибыль, которую вы можете получить.Вы можете совершать сколько угодно транзакций
// (т.е.покупать одну и продавать одну акцию несколько раз) со следующими ограничениями:
// После того, как вы продали свои акции, вы не можете купить акции на следующий день(т.е.один день перезарядки).
// Примечание.Вы не можете совершать несколько транзакций одновременно(т.е.вы должны продать акции, прежде чем покупать их снова).
// 309

prices = [1, 2, 3, 0, 2];
//prices = [1]
//prices = [4, 3, 2, 10, 11, 0, 11]
//prices = [1, 3, 2, 8, 4, 9], fee = 2
prices = [1, 2, 4] 
function maxProfit(prices) {


    const n = prices.length;
    const dp = Array.from({length : n + 2}).fill(null).map(() => [0, 0]);


    dp[1][0] = -prices[0];
    //dp[1][0] = -prices[0];
    //dp[0][1] = 0;

    for (let i = 0; i < n; i++) {
        dp[i + 2][0] = Math.max(dp[i + 1][0], dp[i][1] - prices[i]);
        dp[i + 2][1] = Math.max(dp[i + 1][1], dp[i+ 1][0] + prices[i]);
        console.log(dp[i + 2][0] + ' - dp[i + 2][0] - ' + dp[i + 2][1] + ' - dp[i + 2][1] ')
    }

    return dp[prices.length + 1][1];
};


console.log(maxProfit(prices))














// function maxProfit(prices) {

//     let cash = 0;
//     let newCash = 0;
//     let hold = -prices[0];
//     let frozen = false;
//     for (let i = 1; i < prices.length; i++) {
//         //    if (!frozen) {
//         newCash = Math.max(cash, hold + prices[i]);
//         //        if (cash !== newCash) {
//         cash = newCash;
//         //           frozen = true;
//         //        }
//         //   } else {
//         //       frozen = false;
//         //   }

//         hold = Math.max(hold, cash - prices[i])
//         console.log(cash + ' - cash - ' + hold + ' - hold')
//     }

//     return cash;

// };
    
    // let cash = 0;
    // let newCash = 0;
    // let hold = -prices[0];
    // let frozen = false;
    // for (let i = 1; i < prices.length; i++) {
    //     //    if (!frozen) {
    //     newCash = Math.max(cash, hold + prices[i]);
    //     //        if (cash !== newCash) {
    //     cash = newCash;
    //     //           frozen = true;
    //     //        }
    //     //   } else {
    //     //       frozen = false;
    //     //   }

    //     hold = Math.max(hold, cash - prices[i])
    //     console.log(cash + ' - cash - ' + hold + ' - hold')
    // }

    // return cash;