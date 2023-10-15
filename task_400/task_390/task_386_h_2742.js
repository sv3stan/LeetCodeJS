﻿// Вам даны два целочисленных массива с нулевым индексом, стоимость и время, 
// размером n, представляющие затраты и время, затраченные на покраску n 
// различных стен соответственно.В наличии два художника:
// Оплачиваемый маляр, который красит i - ю стену за[i] единиц времени и 
// тратит на это затраты[i] единиц денег.
// Бесплатный маляр, который красит любую стену за 1 единицу времени по цене 0. 
// Но бесплатного маляра можно использовать только в том случае, если платный маляр уже занят.
// Верните минимальную сумму денег, необходимую для покраски n стен.

// 2742

cost = [1, 2, 3, 2], time = [1, 2, 3, 2]
//cost = [3, 2], time = [1, 1]


var paintWalls = function (cost, time) {


    const length = cost.length;
    const dp = Array.from({ length: length + 1 }).fill(Infinity);
    dp[0] = 0;

    for (let i = 0; i < length; i++) {
        for (let j = length; j >= 1; j--) {
            dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
        }
    }
    return dp[length];

};


console.log(paintWalls(cost, time))