// Вам дан целочисленный массив цен, где цены[i] — цена данной акции на i - й день.
// Каждый день вы можете принять решение о покупке и / или продаже акций.
// Вы можете одновременно владеть не более одной акцией.Однако вы можете купить его и тут же продать в тот же день.
// Найдите и верните максимальную прибыль, которую вы можете получить.
// 122


prices = [7, 1, 5, 3, 6, 4];
prices = [1, 2, 3, 4, 5]
var maxProfit = function (prices) {

    let cash = 0;
    let hold = -prices[0];

    for (let i = 0; i < prices.length; i++) {

        cash = Math.max(cash, hold + prices[i]);
        hold = Math.max(hold, cash - prices[i]);

    }
    return cash
};
console.log(maxProfit(prices))