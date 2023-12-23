// Вам дан целочисленный массив цен, предлагающий цены на 
// различные шоколадные конфеты в магазине.Вам также даются 
// одно целое число денег, которое представляет собой вашу 
// первоначальную сумму денег.
// Вы должны купить ровно две шоколадки, чтобы у вас остался 
// неотрицательный остаток денег.Вы хотели свести к минимуму 
// стоимость двух шоколадных конфет, которые вы покупаете.
// Верните сумму денег, которая останется у вас после покупки 
// двух шоколадок.Если у вас нет возможности купить две шоколадки 
// и вы не получили долги, верните деньги.Обратите внимание, 
// что остаток должен быть неотрицательным.

// 2706


prices = [8, 6, 5, 2, 7, 9, 12, 3, 10], money = 3
prices =
    [1, 2, 2]

var buyChoco = function (prices, money) {


    let firstMin = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < prices.length; i++) {

        if (firstMin >= prices[i]) {
            secondMin = firstMin;
            firstMin = prices[i];
        } else if (firstMin < prices[i] && prices[i] <= secondMin) {
            secondMin = prices[i]
        }
        console.log(firstMin + ' - firstMin - ' + secondMin + ' - secondMin')
    }

    // console.log(firstMin)
    // console.log(secondMin)



    if ((firstMin + secondMin) <= money) {
        return money - (firstMin + secondMin)
    } else {
        return money
    }

};


console.log(buyChoco(prices, money));

