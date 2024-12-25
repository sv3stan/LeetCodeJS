/**
Вам дан массив положительных целых чисел с индексом 0, где heights[i] представляет высоту i-го здания. Если человек находится в здании i, он может перейти в любое другое здание j тогда и только тогда, когда i < j и heights[i] < heights[j]. Вам также даются запросы к другому массиву, где query[i] = [ai, bi]. По i-му запросу Алиса строит ai, а Боб строит bi. Возвращает массив ans, где ans[i] — индекс самого левого здания, где Алиса и Боб могут встретиться по i-му запросу. Если Алиса и Боб не могут переехать в общее здание по запросу i, установите для ans[i] значение -1.
 */

function findMeetingBuilding(
    heights: number[],
    queries: [number, number][],
): number[] {
    const n = heights.length;
    const ans: number[] = new Array(queries.length).fill(-1);

    // Храним оставшиеся запросы, сгруппированные по правому индексу
    const remain: { height: number; queryIndex: number }[][] = new Array(n)
        .fill(null)
        .map(() => []);

    // Обрабатываем запросы
    for (let i = 0; i < queries.length; i++) {
        const [q1, q2] = queries[i];

        const left = Math.min(q1, q2);
        const right = Math.max(q1, q2);

        if (left === right) {
            // Если оба стоят в одном здании, ответ очевиден
            ans[i] = right;
            continue;
        }

        const heightLeft = heights[left];
        const heightRight = heights[right];

        if (heightLeft < heightRight) {
            // Если Алиса уже может перейти к зданию Боба
            ans[i] = right;
            continue;
        }

        // Сохраняем запрос для обработки в будущем
        remain[right].push({
            height: Math.max(heightLeft, heightRight),
            queryIndex: i,
        });
    }

    // Приоритетная очередь для отслеживания минимальных высот
    const minPQ = new MinPriorityQueue<{ height: number; queryIndex: number }>({
        priority: item => item.height,
    });

    // Идём по всем зданиям и проверяем, какие запросы можно закрыть
    for (let j = 0; j < n; j++) {
        // Убираем из очереди запросы, которые теперь можно выполнить
        while (!minPQ.isEmpty() && minPQ.front().element.height < heights[j]) {
            const item = minPQ.dequeue().element;
            ans[item.queryIndex] = j; // Устанавливаем ответ
        }

        // Добавляем все запросы, связанные с текущим зданием
        for (const r of remain[j]) {
            minPQ.enqueue(r);
        }
    }

    return ans;
}
