/**
Есть ресторан с одним шеф-поваром. Вам дан массив клиентов, где клиенты[i] = [arrivali, timei]:
прибытиеi — время прибытия i-го клиента. Время прибытия отсортировано в неубывающем порядке.
timei — время, необходимое для подготовки заказа i-го покупателя.
Когда приходит клиент, он передает шеф-повару свой заказ, а шеф-повар приступает к его приготовлению, когда он простаивает. Клиент ждет, пока шеф-повар закончит готовить заказ. Шеф-повар не готовит еду более чем для одного гостя одновременно. Шеф-повар готовит еду для клиентов в том порядке, в котором они были указаны во входных данных.
Возвращает среднее время ожидания всех клиентов. Решения в пределах 10-5 от фактического ответа считаются принятыми.
 */

let customers = [
    [5, 2],
    [5, 4],
    [10, 3],
    [20, 1],
];

let averageWaitingTime = function (customers) {
    const waitingTime = Array.from({ length: customers.length }).fill(0);

    let newTime = 0;
    // customers[0][0] + customers[0][1];
    // waitingTime[0] = newTime - customers[0][0];

    for (let i = 0; i < customers.length; i++) {
        if (newTime > customers[i][0]) {
            waitingTime[i] = newTime - customers[i][0] + customers[i][1];
            newTime = newTime + customers[i][1];
        } else {
            waitingTime[i] = customers[i][1];
            newTime = customers[i][0] + customers[i][1];
        }
    }

    return waitingTime.reduce((acc, val) => acc + val, 0) / waitingTime.length;
};

console.log(averageWaitingTime(customers));
