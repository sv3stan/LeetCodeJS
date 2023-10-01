// Вам дан массив цен, где цены[i] — это цена данной акции на i - й день.
// Найдите максимальную прибыль, которую вы можете получить.Вы можете совершить не более двух транзакций.
// Примечание.Вы не можете совершать несколько транзакций одновременно(т.е.вы должны продать акции, прежде чем купить их снова).
// 123

prices = [3, 5, 0, 3, 1, 4];
//prices = [1, 2, 3, 4, 5]
//prices = [7, 1, 5, 3, 6, 4]
//prices = [7, 6, 4, 3, 1]

var maxProfit = function (prices) {

    let buy1 = Infinity;
    let buy2 = Infinity;
    let gain1 = 0;
    let gain2 = 0;


    for (let i = 0; i < prices.length; i++) {

        buy1 = Math.min(prices[i], buy1);
        gain1 = Math.max(gain1, prices[i] - buy1);
        buy2 = Math.min(buy2, prices[i] - gain1);
        gain2 = Math.max(gain2, prices[i] - buy2)
        console.log(buy1 + ' - buy1 - ' + buy2 + ' - buy2 -')
        console.log(gain1 + ' - gain1 - ' + gain2 + ' - gain2 -')
    }

    return gain2;

};

console.log(maxgain(prices))







    // //const dp = Array.from({ length: prices.length }, () => Array(prices.length).fill(0));
    // const dp = Array.from({ length: prices.length }).fill(0);
    // // dp[0][0] = 0;

    // console.log(dp)

    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         const currentgain = prices[j] - prices[i];
    //         // console.log(maxFirst + ' - maxFirst - ' + maxSecond + ' - maxSecond - ' + dp[i] + ' - dp[i] - ' + dp[j] + ' - dp[j] -')
    //         //console.log(dp[j][i] + ' - dp[j][i] - ' + prices[i] + '- prices[i] - ' + prices[j] + ' - prices[j] -')
    //         dp[i] = Math.max(dp[i], prices[j] - prices[i]);
    //         // if (dp[i][j] > maxFirst) {
    //         //     maxSecond = maxFirst
    //         //     maxFirst = dp[i][j]
    //         // }
    //         // console.log(maxFirst + ' - maxFirst - ' + maxSecond + ' - maxSecond - ' + dp[i] + ' - dp[i] - ' + dp[j] + ' - dp[j] -')

    //     }
    // }
    // console.log(dp)