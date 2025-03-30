/**
Вы находитесь в городе, который состоит из N перекрестков, пронумерованных от 0 до N - 1, с двунаправленными дорогами между некоторыми пересечениями. Входные данные генерируются таким образом, что вы можете достичь любого пересечения от любого другого пересечения и что между любыми двумя пересечениями существует не более одной дороги. Вам дают целочисленное n и 2D целочисленные дороги, где дороги [i] = [UI, vi, Timei] означает, что между интерсационным пользовательским интерфейсом и VI есть дорога, на которую требуется время. Вы хотите знать, сколько способов вы можете путешествовать с перекрестка 0 к перекрестке N - 1 в кратчайшие сроки. Верните количество способов, которыми вы можете прибыть в пункт назначения в кратчайшие сроки. Поскольку ответ может быть большим, вернуть его модуль 109 + 7.
 */

function countPaths(n: number, roads: number[][]): number {
    const MOD = 1_000_000_007;

    const graph: Map<number, [number, number][]> = new Map();
    for (let i = 0; i < n; i++) {
        graph.set(i, []);
    }
    for (const [u, v, time] of roads) {
        graph.get(u)?.push([v, time]);
        graph.get(v)?.push([u, time]);
    }

    const distances: number[] = Array(n).fill(Infinity);
    distances[0] = 0;

    const ways: number[] = Array(n).fill(0);
    ways[0] = 1;

    const heap: [number, number][] = [[0, 0]];

    while (heap.length > 0) {
        const [currentDist, currentNode] = heap.shift()!;

        if (currentDist > distances[currentNode]) continue;

        for (const [neighbor, time] of graph.get(currentNode)!) {
            const newDist = currentDist + time;

            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                ways[neighbor] = ways[currentNode];
                heap.push([newDist, neighbor]);
            } else if (newDist === distances[neighbor]) {
                ways[neighbor] = (ways[neighbor] + ways[currentNode]) % MOD;
            }
        }

        heap.sort((a, b) => a[0] - b[0]);
    }

    return ways[n - 1];
}
