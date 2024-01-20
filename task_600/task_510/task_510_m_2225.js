// Вам дан целочисленный массив matchs, где match[i] = [winneri, loseri] указывает, 
// что игрок - победитель победил игрока - проигравшего в матче.
// Вернуть список ответов размера 2, где:
//     ответ[0] — список всех игроков, которые не проиграли ни одного матча.
//     ответ[1] — список всех игроков, проигравших ровно один матч.
// Значения в двух списках должны возвращаться в порядке возрастания.
//    Примечание:
// Следует учитывать только игроков, сыгравших хотя бы один матч.
// Тестовые случаи будут сгенерированы таким образом, чтобы никакие два совпадения 
// не имели одинаковый результат.

// 2225

matches = [[1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5], [4, 8], [4, 9], [10, 4], [10, 9]]

var findWinners = function (matches) {


    //matches.sort((a, b) => a[1] - b[1])

    const unicueItem = new Set();
    const lossZero = new Set();
    const lossOne = new Map();
    const answer1 = [];
    const answer2 = [];

    for (const item of matches) {
        for (const items of item) {
            unicueItem.add(items);
        }
        lossZero.add(item[1])
        lossOne.set(item[1], (lossOne.get(item[1]) || 0) + 1);
    }

    for (const key of unicueItem) {
        if (!lossZero.has(key)) answer1.push(key)
    }
    for (const [key, value] of lossOne.entries()) {
        if (value === 1) answer2.push(key)
    }

    return [answer1.sort((a, b) => a - b), answer2.sort((a, b) => a - b)]
};


console.log(findWinners(matches))


