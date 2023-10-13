// Вам дана m x n целочисленная сетка счетов, где account[i][j] — 
// это сумма денег, которую имеет i - й​​​ клиент в j​​​​​​ й банк.
// Верните богатство, которое есть у самого богатого клиента.
// Богатство клиента — это сумма денег, которая находится на 
// всех его банковских счетах.Самый богатый клиент — это клиент, 
// обладающий максимальным богатством.
// 1672

accounts = [[1, 5], [7, 3], [3, 5]]
accounts = [[1, 2, 3], [3, 2, 1]]
accounts = [[0]]

var maximumWealth = function (accounts) {

    let richMan = 0;

    for (const account of accounts) {
        const sum = account.reduce((acc, element) => acc += element, 0);
        if (richMan < sum) richMan = sum;
    }

    return richMan;

};


console.log(maximumWealth(accounts))
