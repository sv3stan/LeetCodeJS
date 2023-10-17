// На конвейерной ленте есть пакеты, которые необходимо доставить
// из одного порта в другой в течение нескольких дней.
// i - й пакет на конвейерной ленте имеет вес weights[i].
// Каждый день мы загружаем корабль упаковками на конвейер
// (в порядке, указанном по весу).Мы не можем загружать груз, 
// превышающий максимальную грузоподъемность судна.
// Верните наименьшую грузоподъемность корабля, 
// при которой все упаковки на конвейерной ленте будут 
// отправлены в течение нескольких дней.
// 1011


weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5

var shipWithinDays = function (weights, days) {

    let left = Math.max(...weights);
    let right = weights.reduce((acc, curr) => acc + curr);

    while (left < right) {
        let middle = left + ((right - left) >> 1);
        let count = 1;
        let sum = 0;

        for (let weight of weights) {
            if (sum + weight > middle) {
                count++;
                sum = 0;
            }
            sum += weight;
        }

        if (count <= days) {
            right = middle;
        } else {
            left = middle + 1;
        }
    }

    return left;


};


console.log(shipWithinDays(weights, days))
