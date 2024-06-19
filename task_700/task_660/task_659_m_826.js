/**
У вас есть n заданий и m работников. Вам даны три массива данных: сложность, прибыль и работник, где:
difficulty[i] и profit[i] - это сложность и прибыль от i-го задания, а 
worker[j] - это способность j-го работника (т.е. j-й работник может выполнить задание только с большим трудом, чем worker[j]).
Каждому работнику может быть поручено не более одного задания, но одно задание может выполняться несколько раз.
Например, если трое работников возьмутся за одно и то же задание, за которое платят 1 доллар, общая прибыль составит 3 доллара. Если работник не сможет выполнить какое-либо задание, его прибыль составит 0 долларов.
Возвращайте максимальную прибыль, которую мы можем получить после назначения работников на рабочие места.
 */

let difficulty = [2, 4, 6, 8, 10];
let profit = [10, 20, 30, 40, 50];
let worker = [4, 5, 6, 7];

let maxProfitAssignment = function (difficulty, profit, worker) {
    const temp = [];
    let allProfit = 0;
    for (let i = 0; i < difficulty.length; i++) {
        temp.push([difficulty[i], profit[i]]);
    }
    temp.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < temp.length; i++) {
        temp[i][1] = Math.max(temp[i][1], temp[i - 1][1]);
    }

    for (let i = 0; i < worker.length; i++) {
        let cur = worker[i];
        let left = 0;
        let right = temp.length - 1;
        let profit = 0;
        while (left <= right) {
            let middle = (left + right) >> 1;
            if (temp[middle][0] <= cur) {
                profit = temp[middle][1];
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        allProfit += profit;
    }
    return allProfit;
};

console.log(maxProfitAssignment(difficulty, profit, worker));
