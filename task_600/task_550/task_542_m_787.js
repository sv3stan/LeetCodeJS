// Имеется n городов, соединенных некоторым количеством рейсов.
// Вам дан массив рейсов, где полеты[i] = [fromi, toi, pricei] указывают на то, 
// что существует рейс из города fromi в город toi по себестоимостиi.
// Вам также даны три целых числа src, dst и k, которые возвращают самую 
// дешевую цену от src до dst с не более чем k остановками.
// Если такого маршрута нет, верните - 1.

// 787


n = 4, flights = [[0, 1, 100], [1, 2, 100], [2, 0, 100], [1, 3, 600], [2, 3, 200]], src = 0, dst = 3, k = 1


var findCheapestPrice = function (n, flights, src, dst, k) {

    const INF = 1000 * 1000 * 1000;
    let minCost = new Array(k + 2).fill(null).map(() => new Array(n).fill(INF));

    // Установка стоимости достижения исходной вершины при 0 пересадках равной 0
    minCost[0][src] = 0;

    // Цикл для каждого возможного количества пересадок
    for (let kk = 1; kk <= k + 1; kk++) {
        for (let i = 0; i < n; i++) {
            minCost[kk][i] = minCost[kk - 1][i];
        }

        // Обновление минимальной стоимости достижения каждой вершины с учетом текущего рейса
        for (const flight of flights) {
            const s = flight[0]; // src
            const d = flight[1]; // dst
            const p = flight[2]; // price
            minCost[kk][d] = Math.min(minCost[kk][d], minCost[kk - 1][s] + p);
        }
    }

    // Проверка, был ли найден путь до конечной вершины с заданным количеством пересадок
    if (minCost[k + 1][dst] === INF) {
        return -1;
    } else {
        return minCost[k + 1][dst];
    }

};


console.log(findCheapestPrice(n, flights, src, dst, k))