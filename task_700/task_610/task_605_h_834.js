/*
Существует неориентированное связное дерево с n узлами, помеченными от 0 до n-1 и n-1 ребер.
Вам задано целое число n и ребра массива, где ребра [i] = [ai, bi] указывают на то, что между узлами ai и bi в дереве есть ребро.
Возвращает массив ответа длины n, где ответ[i] — это сумма расстояний между i-м узлом дерева и всеми остальными узлами.*/

// 834

let n = 6;
let edges = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [2, 5],
];

let sumOfDistancesInTree = function (n, edges) {
    const graph = Array.from({ length: n })
        .fill(null)
        .map(() => []);
    const subtreeCount = Array.from({ length: n }).fill(1);
    const distanceSum = Array.from({ length: n }).fill(0);

    // Строим граф
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    // Функция для обхода дерева и вычисления subtreeCount и distanceSum
    function dfs(node, parent) {
        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue;
            dfs(neighbor, node);
            subtreeCount[node] += subtreeCount[neighbor];
            distanceSum[node] += distanceSum[neighbor] + subtreeCount[neighbor];
        }
    }

    // Вызываем dfs для корня дерева
    dfs(0, -1);

    // Функция для обратного обхода дерева и вычисления суммы расстояний для каждого узла
    function dfs2(node, parent) {
        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue;
            distanceSum[neighbor] =
                distanceSum[node] -
                subtreeCount[neighbor] +
                (n - subtreeCount[neighbor]);
            dfs2(neighbor, node);
        }
    }

    // Вызываем dfs2 для корня дерева
    dfs2(0, -1);

    return distanceSum;
};

console.log(sumOfDistancesInTree(n, edges));
