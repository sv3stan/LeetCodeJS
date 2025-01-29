/**
Существует ориентированный граф из n узлов, каждый узел которого помечен от 0 до n - 1. Граф представлен 2D-графом целочисленного массива с индексом 0, где граф [i] представляет собой целочисленный массив узлов, смежных с узлом i, что означает, что там является ребром от узла i до каждого узла в графе [i]. Узел является терминальным узлом, если нет исходящих ребер. Узел является безопасным узлом, если каждый возможный путь, начинающийся от этого узла, ведет к конечному узлу (или другому безопасному узлу). Верните массив, содержащий все безопасные узлы графа. Ответ следует отсортировать по возрастанию.
 */

function eventualSafeNodes(graph: number[][]): number[] {
    const n = graph.length;
    const reverseGraph: number[][] = Array.from({ length: n }, () => []);
    const inDegree: number[] = Array(n).fill(0);
    const safeNodes: number[] = [];

    for (let i = 0; i < n; i++) {
        for (const neighbor of graph[i]) {
            reverseGraph[neighbor].push(i);
            inDegree[i]++;
        }
    }

    const queue: number[] = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        const node = queue.shift()!;
        safeNodes.push(node);

        for (const neighbor of reverseGraph[node]) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return safeNodes.sort((a, b) => a - b);
}
