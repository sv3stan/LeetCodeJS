// Лягушка переправляется через реку.Река разделена на некоторое количество частей, 
// и в каждой части может быть или не быть камня.Лягушка может прыгать на камень, но не должна прыгать в воду.
// Учитывая список позиций камней(в единицах), отсортированный по возрастанию, определите, 
// сможет ли лягушка пересечь реку, приземлившись на последний камень.
// Изначально лягушка находится на первом камне и предполагает, что первый прыжок должен составлять 1 единицу.
// Если последний прыжок лягушки составил k единиц, ее следующий прыжок должен составлять либо k - 1, 
// k или k + 1 единиц.Лягушка может прыгать только вперед.
// 403

stones = [0, 1, 3, 5, 6, 8, 12, 17]
stones = [0, 1, 2, 3, 4, 8, 9, 11]
//stones = [0, 1, 2, 3, 4, 5, 6, 12]

var canCross = function (stones) {
    const length = stones.length;
    const dp = new Array(length).fill(null).map(() => new Set());

    dp[0].add(1);

    for (let i = 0; i < length; i++) {
        for (const jump of dp[i]) {
            const reach = stones[i] + jump;

            if (reach === stones[length - 1]) {
                return true;
            }

            const next = stones.indexOf(reach);
            if (next !== -1) {
                if (jump > 1) dp[next].add(jump - 1);
                dp[next].add(jump);
                dp[next].add(jump + 1);
            }
        }
    }

    return false;


};





console.log(canCross(stones))










// const dp = Array.from({ length: stones.length }).fill(false);
// // console.log(dp)
// dp[0] = true;

// for (let i = 1; i < stones.length; i++) {
//     const length = stones[i] - stones[i - 1];
//     console.log(length + ' - length - ' + i + ' - i - ')
//     // console.log(dp)
//     console.log(dp[i - length] + ' - dp[i - length] -' + dp[i - length - 1] + ' - dp[i - length - 1] -' + dp[i - length + 1] + '+ dp[i - length + 1]')
//     if (!dp[i - length] && !dp[i - length + 1] && !dp[i - length - 1]) {
//         console.log('aaaa')
//         return false;
//     }
//     console.log(stones[i + length] + ' - stones[i + length] -' + stones[i + length + 1] + ' - stones[i + length + 1] -' + stones[i + length - 1] + '+ stones[i + length - 1]')
//     if ((i + length >= 0 && i + length < stones.length && stones[i + length]) ||
//         (i + length + 1 >= 0 && i + length + 1 < stones.length && stones[i + length + 1]) ||
//         (i + length - 1 >= 0 && i + length - 1 < stones.length && stones[i + length - 1])) {
//         dp[i] = true;
//     }


//     //if (stones[i + length] || stones[i + length + 1] || stones[i + length - 1]) dp[i] = true;

//     console.log(dp)
// }

// return dp[stones.length - 1]