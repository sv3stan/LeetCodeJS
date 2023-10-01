// Имеется n элементов, каждый из которых принадлежит нулю или одной из m групп, где группа[i] — это группа, 
// к которой принадлежит i - й элемент, и она равна - 1, если i - й элемент не принадлежит ни к одной группе.
// Элементы и группы имеют нулевой индекс.Группа не может иметь ни одного принадлежащего ей элемента.
// Возвращает отсортированный список элементов, таких что:
// Элементы, принадлежащие к одной группе, располагаются рядом друг с другом в отсортированном списке.
// Между этими элементами существуют некоторые отношения, где beforeItems[i] — это список, 
// содержащий все элементы, которые должны стоять перед i - м элементом в отсортированном массиве(слева от i - го элемента).
// Возвращает любое решение, если существует более одного решения, и возвращает пустой список, если решения нет.
// 1203

let n = 8;
let m = 2;
let group = [-1, -1, 1, 0, 0, 1, 0, -1];
let beforeItems = [[], [6], [5], [6], [3, 6], [], [], []];

//const n = 6;
//const m = 2;
//const group = [0, 1, -1, 0, 1, 0];
//const beforeItems = [[], [6], [5], [2, 3], [5], [], []];
// var sortItems = function (n, m, group, beforeItems) {

// };
const createGraph = (vertices) => {
    const graph = [];
    for (let i = 0; i < vertices; i++) {
        graph.push([]);
    }
    return graph;
};

const createSetGraph = (vertices) => {
    const graph = [];
    for (let i = 0; i < vertices; i++) {
        graph.push(new Set());
    }
    return graph;
};

var sortItems = function (n, m, group, beforeItems) {
    const groups = [...group];
    for (let i = 0; i < n; i++) {
        if (groups[i] == -1) {
            groups[i] = m++;
        }
    }

    const groupGraph = createSetGraph(m);
    const itemGraph = createSetGraph(n);
    const groupIndegree = Array(m).fill(0);
    const itemIndegree = Array(n).fill(0);
    const result = [];

    for (let i = 0; i < n; i++) {
        const toGroup = groups[i];
        for (const prereq of beforeItems[i]) {
            const fromGroup = groups[prereq];
            if (fromGroup != toGroup && !groupGraph[fromGroup].has(toGroup)) {
                groupGraph[fromGroup].add(toGroup);
                groupIndegree[toGroup]++;
            }
            if (!itemGraph[prereq].has(i)) {
                itemGraph[prereq].add(i);
                itemIndegree[i]++;
            }
        }
    }

    const sortedGroupOrder = performTopologicalSort(groupGraph, groupIndegree);
    const sortedItemOrder = performTopologicalSort(itemGraph, itemIndegree);

    if (sortedGroupOrder.length === 0 || sortedItemOrder.length === 0) {
        return [];
    }

    const groupToItem = createGraph(m);
    for (const item of sortedItemOrder) {
        groupToItem[groups[item]].push(item);
    }

    for (const groupId of sortedGroupOrder) {
        for (const item of groupToItem[groupId]) {
            result.push(item);
        }
    }

    return result;
};

const performTopologicalSort = (graph, indegree) => {
    const result = [];
    const queue = [];
    const vertexCount = indegree.length;

    for (let i = 0; i < vertexCount; i++) {
        if (indegree[i] == 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        const currentVertex = queue.shift();
        result.push(currentVertex);

        for (const child of graph[currentVertex]) {
            if (--indegree[child] == 0) {
                queue.push(child);
            }
        }
    }

    for (let i = 0; i < vertexCount; i++) {
        if (indegree[i] > 0) {
            return [];
        }
    }

    return result;
};






console.log(sortItems(n, m, group, beforeItems))