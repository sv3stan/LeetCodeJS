// У Алисы есть n шариков, закрепленных на веревке.
// Вам дана строка цветов с нулевым индексом, 
// где цвета[i] — это цвет i - го воздушного шара.
// Алиса хочет, чтобы веревка была разноцветной.
// Она не хочет, чтобы два последовательных шарика 
// были одного цвета, поэтому просит Боба о помощи.
// Боб может снять с веревки несколько воздушных шаров, 
// чтобы сделать ее разноцветной.Вам дан массив целых 
// чисел с индексом 0 NeedTime, где NeedTime[i] — это 
// время(в секундах), которое понадобится Бобу, 
// чтобы снять i - й шарик с веревки.
// Возвращает минимальное время, необходимое Бобу, 
// чтобы раскрасить веревку.

// 1578

colors = "abaac", neededTime = [1, 2, 3, 4, 5]
colors = "aabaa", neededTime = [1, 2, 3, 4, 1]
colors = "aaabbbabbbb"
neededTime = [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]



colors = "aaabbbabbbb"
neededTime = [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]

var minCost = function (colors, neededTime) {

    let sum = 0;

    for (let i = 0; i < colors.length - 1; i++) {

        let max = 0;


        if (colors[i] === colors[i + 1]) {

            // const helper = new Array();


            while (colors[i] === colors[i + 1]) {

                max = Math.max(neededTime[i], max)
                sum += neededTime[i];
                //   helper.push(neededTime[i])
                i++;
            }
            max = Math.max(neededTime[i], max)
            sum += neededTime[i];

            //helper.push(neededTime[i])

            sum -= max;
            //console.log(max + ' - max ')
            //console.log(helper)




        }
        //console.log(sum)
    }



    return sum;
};


console.log(minCost(colors, neededTime))