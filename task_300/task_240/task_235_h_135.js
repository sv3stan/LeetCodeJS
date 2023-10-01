// В очереди стоят n детей.Каждому дочернему ребенку присваивается значение рейтинга, 
// указанное в рейтингах целочисленного массива.
// Вы даете конфеты этим детям при соблюдении следующих требований:
// У каждого ребенка должна быть хотя бы одна конфета.
// Дети с более высоким рейтингом получают больше конфет, чем их соседи.
// Верните минимальное количество конфет, которое вам нужно, чтобы раздать конфеты детям.
// 135

ratings = [1, 2, 2]
ratings = [1, 2, 3, 2, 2, 1, 3]

var candy = function (ratings) {
    const length = ratings.length;
    const answer = Array.from({ length: length }).fill(1);
    for (let i = 1; i < length; i++) {
        if (ratings[i - 1] < ratings[i]) {
            answer[i] += answer[i - 1]
        }
    }
    //console.log(answer)
    for (let i = length - 1; i > 0; i--) {
        //console.log(i)
        //console.log(ratings[i - 1] + ' - ratings[i - 1] - ' + ratings[i] + ' - ratings[i]- ' + answer[i - 1] + ' - answer[i - 1] -' + answer[i] + ' - answer[i]- ')
        if (ratings[i - 1] > ratings[i] && answer[i - 1] <= answer[i]) {
            console.log('++++++ ')
            answer[i - 1] = answer[i] + 1;
        }

        // console.log(answer)
    }
    return answer.reduce((acc, item) => acc += item, 0)

};

console.log(candy(ratings))