/*
Существует неориентированный звездчатый граф, состоящий из n узлов, помеченных от 1 до n. Звездчатый граф — это граф, в котором есть один центральный узел и ровно n–1 ребер, соединяющих центральный узел с каждым другим узлом.
Вам дан двумерный целочисленный массив ребер, где каждое ребро [i] = [ui, vi] указывает на то, что между узлами ui и vi есть ребро. Вернуть центр данного звездного графа.
*/

let edges = [
    [1, 2],
    [2, 3],
    [4, 2],
];

// edges = [
//     [1, 2],
//     [5, 1],
//     [1, 3],
//     [1, 4],
// ];

let findCenter = function (edges) {
    const n = edges.length;
    const hash = new Map();

    for (let i = 0; i < n; i++) {
        hash.set(edges[i][0], (hash.get(edges[i][0]) || 0) + 1);
        hash.set(edges[i][1], (hash.get(edges[i][1]) || 0) + 1);
    }

    for (let [key, values] of hash.entries()) {
        if (values === n) return key;
    }

    return null;
};

console.log(findCenter(edges));
