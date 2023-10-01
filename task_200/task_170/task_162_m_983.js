// Вы запланировали поездку на поезде на год вперед.Дни года, в которые вы будете путешествовать, 
// задаются в виде целочисленного массива дней.Каждый день представляет собой целое число от 1 до 365.
// Билеты на поезд продаются тремя разными способами:
// проездной на 1 день продается за стоимость[0] долларов,
//     7 - дневный проездной продается по цене[1] долларов, и
// 30 - дневный пропуск продается по цене[2] долларов.
// Пропуска позволяют путешествовать столько дней подряд.
// Например, если мы получим 7 - дневный проездной на второй день, то мы сможем путешествовать 7 дней: 2, 3, 4, 5, 6, 7 и 8.
// Возвращает минимальное количество долларов, которое вам необходимо путешествовать каждый день в заданном списке дней.
// 983

days = [1, 4, 6, 7, 8, 20], costs = [2, 7, 15]
//days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], costs = [2, 7, 15]
days = [1, 4, 6, 7, 8, 20], costs = [7, 2, 15]
var mincostTickets = function (days, costs) {
    const length = days[days.length - 1]
    const minCost = Array.from({ length: length + 1 }).fill(0);
    const isTravelingDay = Array.from({ length: length + 1 }).fill(false);
    minCost[0] = 0;
    for (const day of days) {
        isTravelingDay[day] = true;
    }
    for (let day = 1; day <= days[days.length - 1]; day++) {
        //console.log(day + ' - day - ')
        if (isTravelingDay[day]) {
            // console.log(' ---- ')
            // console.log((costs[0] + Math.max(0, minCost[day - 1])) + ' - [day - 1]) - ' + (costs[1] + Math.max(0, minCost[day - 7])) + ' - [day - 7]) - ')

            // minCost[day] = Math.min(
            //     costs[0] + Math.max(0, minCost[day - 1]),
            //     (day >= 7 ? costs[1] + Math.max(0, minCost[day - 7]) : Infinity),
            //     (day >= 30 ? costs[2] + Math.max(0, minCost[day - 30]) : Infinity)

            minCost[day] = Math.min(
                minCost[Math.max(0, day - 1)] + costs[0],
                minCost[Math.max(0, day - 7)] + costs[1],
                minCost[Math.max(0, day - 30)] + costs[2]


            );
        } else {
            minCost[day] = minCost[day - 1]
        }
    }
    // console.log(minCost)
    // console.log(isTravelingDay)
    return minCost[minCost.length - 1]
};

console.log(mincostTickets(days, costs));