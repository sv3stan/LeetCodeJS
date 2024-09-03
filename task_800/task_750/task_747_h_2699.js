/**
Вам дан неориентированный взвешенный связный граф, содержащий n узлов, помеченных от 0 до n - 1, и целочисленный массив ребер, где ребра [i] = [ai, bi, wi] указывают, что между узлами ai и bi есть ребро с весом. ви.
Некоторые ребра имеют вес -1 (wi = -1), а другие имеют положительный вес (wi > 0).
Ваша задача — изменить все ребра с весом -1, присвоив им положительные целочисленные значения в диапазоне [1, 2 * 109] так, чтобы кратчайшее расстояние между источником и пунктом назначения узлов стало равным целочисленному целевому значению. Если существует несколько модификаций, которые делают кратчайшее расстояние между источником и местом назначения равным целевому, любая из них будет считаться правильной.
Верните массив, содержащий все ребра (даже неизмененные) в любом порядке, если можно сделать кратчайшее расстояние от источника до места назначения равным целевому, или пустой массив, если это невозможно.
Примечание. Вам не разрешено изменять веса ребер с начальными положительными весами.
 */

let n = 5;
let edges = [
    [4, 1, -1],
    [2, 0, -1],
    [0, 3, -1],
    [4, 3, -1],
];
let source = 0;
let destination = 1;
let target = 5;

class PriorityQueue {
    constructor() {
        this.elements = [];
    }

    isEmpty() {
        return this.elements.length === 0;
    }

    enqueue(element, priority) {
        this.elements.push({ element, priority });
        this.elements.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.elements.shift();
    }
}

let modifiedGraphEdges = function (n, edges, source, destination, target) {
    const adj = Array.from({ length: n }, () => []);
    for (let i = 0; i < edges.length; i++) {
        const [nodeA, nodeB] = edges[i];
        adj[nodeA].push([nodeB, i]);
        adj[nodeB].push([nodeA, i]);
    }

    const dist = Array.from({ length: n }, () => [Infinity, Infinity]);
    dist[source] = [0, 0];

    runDijkstra(adj, edges, dist, source, 0, 0);
    const difference = target - dist[destination][0];
    if (difference < 0) return [];

    runDijkstra(adj, edges, dist, source, difference, 1);
    if (dist[destination][1] < target) return [];

    for (const edge of edges) {
        if (edge[2] === -1) edge[2] = 1;
    }

    return edges;

    function runDijkstra(adj, edges, dist, source, difference, run) {
        const pq = new PriorityQueue();
        pq.enqueue(source, 0);
        dist[source][run] = 0;

        while (!pq.isEmpty()) {
            const { element: currentNode, priority: currentDistance } =
                pq.dequeue();

            if (currentDistance > dist[currentNode][run]) continue;

            for (const [nextNode, edgeIndex] of adj[currentNode]) {
                let weight = edges[edgeIndex][2];
                if (weight === -1) weight = 1;

                if (run === 1 && edges[edgeIndex][2] === -1) {
                    const newWeight =
                        difference + dist[nextNode][0] - dist[currentNode][1];
                    if (newWeight > weight) {
                        edges[edgeIndex][2] = weight = newWeight;
                    }
                }

                if (dist[nextNode][run] > dist[currentNode][run] + weight) {
                    dist[nextNode][run] = dist[currentNode][run] + weight;
                    pq.enqueue(nextNode, dist[nextNode][run]);
                }
            }
        }
    }
};

console.log(modifiedGraphEdges(n, edges, source, destination, target));
