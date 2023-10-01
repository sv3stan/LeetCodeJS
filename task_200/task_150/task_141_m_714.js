// Вам дан массив цен, где цены[i] — это цена данной акции на i - й день, 
// а целое число представляет комиссию за транзакцию.
// Найдите максимальную прибыль, которую вы можете получить.
// Вы можете совершать столько транзакций, сколько хотите, 
// но вам нужно платить комиссию за транзакцию за каждую транзакцию.
// Примечание:
// Вы не можете участвовать в нескольких транзакциях одновременно
// (т.е.вы должны продать акции, прежде чем купить их снова).
// Комиссия за транзакцию взимается только один раз за каждую покупку и продажу акций.
// 714
prices = [1, 3, 2, 8, 4, 9];
fee = 2;
// prices = [1, 3, 7, 5, 10, 3];
// fee = 3;
function maxProfit(prices, fee) {
    let cash = 0;
    let hold = -prices[0];
    console.log(cash + ' - cash - ' + hold + ' - hold')
    for (let i = 1; i < prices.length; i++) {
        cash = Math.max(cash, hold + prices[i] - fee);
        hold = Math.max(hold, cash - prices[i]);


        console.log(cash + ' - cash - ' + hold + ' - hold')
        //     cash = newCash;
        //     hold = newHold;
    }

    return cash;
};

console.log(maxProfit(prices, fee))