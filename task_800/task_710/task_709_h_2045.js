/**
Город представляется в виде двунаправленного связного графа с n вершинами, где каждая вершина помечена от 1 до n (включительно). Ребра в графе представлены как ребра двумерного целочисленного массива, где каждое edges [i] = [ui, vi] обозначает двунаправленное ребро между вершиной ui и вершиной vi. Каждая пара вершин соединена не более чем одним ребром, и ни одна вершина не имеет ребра сама по себе. Время, необходимое для прохождения любого ребра, составляет time минут.
В каждой вершине есть светофор, который каждые change минут меняет свой цвет с зеленого на красный и наоборот. Все сигналы изменяются одновременно. Вы можете войти в вершину в любое время, но покинуть вершину можно только тогда, когда сигнал зеленый. Вы не можете ждать в вершине, если сигнал зеленый.
Второе минимальное значение определяется как наименьшее значение, строго превышающее минимальное значение.
Например, второе минимальное значение [2, 3, 4] равно 3, а второе минимальное значение [2, 2, 4] равно 4.
Учитывая n, ребра, время и изменение, верните второе минимальное время, необходимое для перехода от вершины 1 к вершине n.
Примечания:
Через любую вершину можно пройти любое количество раз, включая 1 и n.
Можно предположить, что когда путешествие начнется, все сигналы только что загорелись зеленым.
 */

let n = 5;
let edges = [
    [1, 2],
    [1, 3],
    [1, 4],
    [3, 4],
    [4, 5],
];
let time = 3;
let change = 5;
let secondMinimum = function (n, edges, time, change) {
    const graph = Array.from({ length: n + 1 }, () => []);
    const visitTimes = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const queue = [1];
    let currentTime = 0;
    let result = -1;

    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            if (node === n) {
                if (result !== -1) {
                    return currentTime;
                }
                result = currentTime;
            }

            for (const neighbour of graph[node]) {
                const neighbourTimes = visitTimes[neighbour];

                if (
                    neighbourTimes.length === 0 ||
                    (neighbourTimes.length === 1 &&
                        neighbourTimes[0] !== currentTime)
                ) {
                    queue.push(neighbour);
                    visitTimes[neighbour].push(currentTime);
                }
            }
        }

        if (Math.floor(currentTime / change) % 2 === 1) {
            currentTime += change - (currentTime % change);
        }

        currentTime += time;
    }

    return -1;
};

console.log(secondMinimum(n, edges, time, change));
