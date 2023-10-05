// Дана ссылка на узел связного неориентированного графа.
// Верните глубокую копию(клон) графика.
// Каждый узел графа содержит значение(int) и список(List[Node]) своих соседей.
// class Node {
//     public int val;
//     public List<Node> neighbors;
// }
// Формат тестового примера:
// Для простоты значение каждого узла совпадает с индексом узла(с индексом 1).
// Например, первый узел с val == 1, второй узел с val == 2 и так далее.
// Граф представлен в тестовом примере с использованием списка смежности.
// Список смежности — это набор неупорядоченных списков,
// используемый для представления конечного графа.
// Каждый список описывает набор соседей узла в графе.
// Данный узел всегда будет первым узлом с val = 1.
// Вы должны вернуть копию данного узла в качестве ссылки на клонированный граф.
// 133

adjList = [[2, 4], [1, 3], [2, 4], [1, 3]];

/**
 * @param {Node} node
 * @param {Map<Node, Node>} clone 
 * @return {Node}
 */


function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};


var cloneGraph = function (node, clone = new Map()) {
    // If the input node is null, return null

    if (!node) return null;

    // If the input node has already been cloned, return the corresponding cloned node
    if (clone.has(node)) return clone.get(node);

    // Create a new node object that is a copy of the input node
    const cloneNode = new Node(node.val);

    // Add the input node and its corresponding cloned node to the clone map
    clone.set(node, cloneNode);

    // Loop over each neighbor of the input node
    for (const neighbor of node.neighbors) {
        // Recursively call cloneGraph on the neighbor to create a deep copy of the neighbor node
        const clonedNeighbor = cloneGraph(neighbor, clone);

        // Add the cloned neighbor to the cloneNode.neighbors array to preserve the graph structure
        cloneNode.neighbors.push(clonedNeighbor);
    }

    // Return the cloned node object
    return cloneNode;
};

console.log(cloneGraph(adjList))