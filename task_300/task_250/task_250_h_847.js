// У вас есть неориентированный связный граф из n узлов, помеченных от 0 до n - 1. 
// Вам дан граф - массив, где Graph[i] — это список всех узлов, связанных с узлом i ребром.
// Возвращает длину кратчайшего пути, который посещает каждый узел.
// Вы можете начать и остановиться на любом узле, можете посещать узлы несколько раз и повторно использовать ребра.
// 847


graph = [[1, 2, 3], [0], [0], [0]]

var shortestPathLength = function (graph) {

    const n = graph.length;

    // Initialize a 2D array dp to store the shortest path lengths.
    // dp[mask][u] represents the shortest path ending at node u and covering all nodes in mask.

    const dp = Array.from({ length: (1 << n) }).fill(null).map(() => Array(n).fill(Infinity));


    // Initialize the queue for BFS.
    const queue = [];

    // Initialize the dp array for the starting nodes.
    for (let i = 0; i < n; i++) {
        dp[1 << i][i] = 0;
        queue.push([1 << i, i]);
    }
    //console.log(dp)
    while (queue.length > 0) {
        const [mask, u] = queue.shift();

        for (const v of graph[u]) {
            const newMask = mask | (1 << v);

            if (dp[newMask][v] > dp[mask][u] + 1) {
                dp[newMask][v] = dp[mask][u] + 1;
                queue.push([newMask, v]);
            }
        }
    }

    // Find the minimum path length that covers all nodes.
    let minPathLength = Infinity;
    const fullMask = (1 << n) - 1;

    for (let u = 0; u < n; u++) {
        minPathLength = Math.min(minPathLength, dp[fullMask][u]);
    }

    return minPathLength;

};

console.log(shortestPathLength(graph))