/*
Имеется n рабочих. Вам даны два целочисленных массива: качество и заработная плата, где качество[i] — качество i-го работника, а заработная плата[i] — ожидаемая минимальная заработная плата для i-го работника.
Мы хотим нанять ровно k работников, чтобы сформировать оплачиваемую группу. Чтобы нанять группу из k рабочих, мы должны заплатить им по следующим правилам:
Каждый работник в оплачиваемой группе должен получать заработную плату, по крайней мере, на уровне ожидаемой минимальной заработной платы.
В группе оплата каждого работника должна быть прямо пропорциональна его качеству. Это означает, что если качество работника вдвое выше, чем у другого работника в группе, то ему придется платить вдвое больше, чем другому работнику.
Учитывая целое число k, верните наименьшую сумму денег, необходимую для формирования платной группы, удовлетворяющей вышеуказанным условиям. Принимаются ответы в пределах 10-5 от фактического ответа.
*/

let quality = [10, 20, 5];
let wage = [70, 50, 30];
let k = 2;

let mincostToHireWorkers = function (quality, wage, k) {
    const workers = [];
    for (let i = 0; i < quality.length; i++) {
        workers.push([wage[i] / quality[i], quality[i]]);
    }
    workers.sort((a, b) => a[0] - b[0]);
    let answer = Infinity,
        qsum = 0;
    let qualityqueue = [];
    for (const worker of workers) {
        qsum += worker[1];
        let index = 0;
        while (worker[1] < qualityqueue[index]) {
            index++;
        }
        qualityqueue.splice(index, 0, worker[1]);
        if (qualityqueue.length > k) {
            qsum -= qualityqueue[0];
            qualityqueue.shift();
        }
        if (qualityqueue.length === k) {
            answer = Math.min(answer, qsum * worker[0]);
        }
    }

    return answer;
};

console.log(mincostToHireWorkers(quality, wage, k));
