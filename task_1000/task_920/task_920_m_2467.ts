/**
Существует неопределенное дерево с N -узлами, помеченными от 0 до N - 1, коренятся в узле 0. Вам дают 2D Целостные края массива длины n - 1, где края [i] = [ai, bi] указывает на то, что есть Край между узлами ИИ и Би в дереве. На каждом узле я есть ворота. Вам также дают массив даже числа целых чисел, где сумма [i] представляет: цена, необходимая для открытия ворот в узле I, если сумма [i] отрицательна, или, Денежная награда, полученная при открытии ворот в узле I, в противном случае. Игра продолжается следующим образом: Первоначально Алиса находится в узле 0, а Боб в узле Боб. В каждую секунду Алиса и Боб каждый переезжает в соседний узел. Алиса движется к некоторому листовому узлу, а Боб движется к узлу 0. На каждый узел по их пути Алиса и Боб тратят деньги, чтобы открыть ворота в этом узле, либо принять награду. Обратите внимание, что: Если ворота уже открыты, цена не потребуется, и не будет никакой денежной награды. Если Алиса и Боб достигнут узла одновременно, они разделяют цену/вознаграждение за открытие там ворот. Другими словами, если цена открыть ворота C, то и Алиса, и Боб платят C / 2 каждый. Точно так же, если награда у ворот составляет C, они оба получают C / 2 каждый. Если Алиса достигает листового узла, она перестает двигаться. Точно так же, если Боб достигает узла 0, он перестает двигаться. Обратите внимание, что эти события не зависят друг от друга. Вернуть максимальный чистый доход, который может иметь Алиса, если она отправится к оптимальному листовому узлу.
 */

function mostProfitablePath(
    edges: number[][],
    bob: number,
    amount: number[],
): number {
    const n = edges.length + 1;
    const graph: number[][] = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const bobTime: number[] = Array(n).fill(-1);
    function findBobPath(node: number, parent: number, time: number): boolean {
        if (node === 0) {
            bobTime[node] = time;
            return true;
        }
        bobTime[node] = time;
        for (const neighbor of graph[node]) {
            if (neighbor !== parent && findBobPath(neighbor, node, time + 1)) {
                return true;
            }
        }
        bobTime[node] = -1;
        return false;
    }
    findBobPath(bob, -1, 0);

    let maxIncome = -Infinity;

    function dfs(node: number, parent: number, aliceTime: number): number {
        let income = 0;

        if (bobTime[node] === -1) {
            income += amount[node];
        } else if (bobTime[node] === aliceTime) {
            income += amount[node] / 2;
        } else if (bobTime[node] > aliceTime) {
            income += amount[node];
        }

        if (graph[node].length === 1 && node !== 0) {
            return income;
        }

        let maxChildIncome = -Infinity;
        for (const neighbor of graph[node]) {
            if (neighbor !== parent) {
                maxChildIncome = Math.max(
                    maxChildIncome,
                    dfs(neighbor, node, aliceTime + 1),
                );
            }
        }

        return income + (maxChildIncome === -Infinity ? 0 : maxChildIncome);
    }

    maxIncome = dfs(0, -1, 0);

    return maxIncome;
}
