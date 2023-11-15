// Вам дан массив маршрутов, представляющий автобусные маршруты, 
// где маршруты[i] — это автобусный маршрут, который i - й автобус повторяет вечно.
// Например, если маршруты[0] = [1, 5, 7], это означает, что 0 - й автобус 
// едет в последовательности 1 -> 5 -> 7 -> 1 -> 5 -> 7 -> 1 -> .. .навсегда.
// Вы начнете с исходной остановки автобуса(изначально вы не находитесь ни в
// одном автобусе) и хотите добраться до цели автобусной остановки.
// Передвигаться между остановками можно только на автобусах.
// Возвращает наименьшее количество автобусов, на которых вам нужно доехать 
// от источника до цели.Верните - 1, если это невозможно.
// 815


routes = [[1, 2, 7], [3, 6, 7]], source = 1, target = 6


var numBusesToDestination = function (routes, source, target) {

    if (source === target) return 0;

    const stopToRoutesMap = new Map(); // Мапа, где ключ - остановка, значение - маршруты, проходящие через эту остановку
    const queue = [];
    const visitedStops = new Set(); // Множество для отслеживания посещенных остановок
    const visitedRoutes = new Set(); // Множество для отслеживания посещенных маршрутов

    // Заполнение мапы stopToRoutesMap
    for (let i = 0; i < routes.length; i++) {
        for (const stop of routes[i]) {
            if (!stopToRoutesMap.has(stop)) stopToRoutesMap.set(stop, []);
            stopToRoutesMap.get(stop).push(i);
        }
    }

    // Начальная итерация, добавляем все маршруты, проходящие через начальную остановку, в очередь
    const initialRoutes = stopToRoutesMap.get(source);
    for (const route of initialRoutes) {
        queue.push(route);
        visitedRoutes.add(route);
    }

    let steps = 1; // Начальный шаг

    while (queue.length > 0) {
        const currentQueueSize = queue.length;

        for (let i = 0; i < currentQueueSize; i++) {
            const currentRoute = queue.shift();

            for (const stop of routes[currentRoute]) {
                if (visitedStops.has(stop)) continue; // Пропускаем уже посещенные остановки
                visitedStops.add(stop);

                if (stop === target) return steps; // Если достигли целевой остановки, возвращаем количество шагов

                const nextRoutes = stopToRoutesMap.get(stop);

                for (const nextRoute of nextRoutes) {
                    if (!visitedRoutes.has(nextRoute)) {
                        queue.push(nextRoute);
                        visitedRoutes.add(nextRoute);
                    }
                }
            }
        }

        steps++; // Увеличиваем количество шагов после обработки текущего уровня маршрутов
    }

    return -1; // Если не удалось добраться до целевой остановки

};


console.log(numBusesToDestination(routes, source, target))