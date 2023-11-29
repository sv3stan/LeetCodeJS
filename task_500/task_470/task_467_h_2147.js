// Вдоль длинного библиотечного коридора стоит ряд сидений и декоративных растений.
// Вам дан строковый коридор длины n с нулевым индексом, состоящий из букв «S» и «P», 
// где каждая «S» представляет собой сиденье, а каждая «P» представляет растение.
// Одна перегородка уже установлена ​​слева от индекса 0, а другая справа от индекса n - 1. 
// Можно установить дополнительные перегородки.Для каждой позиции между индексами i - 1 
// и i(1 <= i <= n - 1) можно установить не более одного разделителя.
// Разделите коридор на непересекающиеся секции, где в каждой секции будет ровно два 
// места с любым количеством растений.Может быть несколько способов выполнить деление.
// Два способа различны, если есть положение, в котором перегородка установлена ​​первым 
// способом, а вторым нет.
// Возвращает количество способов разделить коридор.Поскольку ответ может быть очень 
// большим, верните его по модулю 109 + 7. Если нет, верните 0.
// 2147


corridor = "SSPPSPS";
corridor = "PPSPSP"


var numberOfWays = function (corridor) {

    const MOD = 1e9 + 7;

    const cache = new Map();

    function combinations(index, seat) {

        if (index == corridor.length) {
            return seat == 2 ? 1 : 0;
        }

        if (cache.has(`${index}-${seat}`)) {
            return cache.get(`${index}-${seat}`);
        }


        let answer = 0;


        if (seat == 2) {
            if (corridor[index] == 'S') {
                answer = combinations(index + 1, 1);
            } else {
                answer = (combinations(index + 1, 0) + combinations(index + 1, 2)) % MOD;
            }
        } else {
            if (corridor[index] == 'S') {
                answer = combinations(index + 1, seat + 1);
            } else {
                answer = combinations(index + 1, seat);
            }
        }

        cache.set(`${index}-${seat}`, answer);
        return answer;
    }

    return combinations(0, 0);

};

console.log(numberOfWays(corridor))















// const numberZeros = corridor.split("").reduce((acc, item) => {
//     if (item === "S") acc++;
//     return acc;
// }, 0);
// let numberOnes = [];
// if (numberZeros <= 1 || numberZeros % 2 === 1) return false;


// for (let i = 0; i < corridor.length; i++) {

//     let countP = 0;

//     while (corridor[i] === "P") {
//         console.log(i);
//         i++;
//         countP++;
//     }

//     if (countP > 1) {
//         numberOnes.push(countP);
//     }


// }

// console.log(numberOnes)
// return numberOnes.reduce((acc, item) => acc *= item + 1, 1)
