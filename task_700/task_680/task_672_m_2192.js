/*
Вам дано целое положительное число n, представляющее количество узлов ориентированного ациклического графа (DAG). Узлы нумеруются от 0 до n – 1 (включительно).
Вам также дан двумерный целочисленный массив ребер, где ребра [i] = [fromi, toi] обозначают, что в графе имеется однонаправленное ребро от fromi до toi.
Вернуть ответ в виде списка, где ответ[i] — это список предков i-го узла, отсортированный в порядке возрастания.
Узел u является предком другого узла v, если вы можете достичь v через набор ребер.
*/

let n = 8;

let edges = [
    [0, 3],
    [0, 4],
    [1, 3],
    [2, 4],
    [2, 7],
    [3, 5],
    [3, 6],
    [3, 7],
    [4, 6],
];

let getAncestors = function (n, edges) {
    // Инициализация списка смежности для графа
    const reverseList = Array.from({ length: n }, () => []);

    // Заполнение списка смежности с реверсированными рёбрами
    for (let element of edges) {
        const [from, to] = element;
        reverseList[to].push(from);
    }

    const parentsList = [];

    // Для каждого узла находим всех его предков (детей в реверсированном графе)
    for (let i = 0; i < n; i++) {
        const parent = [];
        const visited = new Set();
        helper(i, reverseList, visited);
        // Добавляем посещённые узлы в список предков текущего узла
        for (let node = 0; node < n; node++) {
            if (node === i) continue;
            if (visited.has(node)) {
                parent.push(node);
            }
        }
        parentsList.push(parent);
    }

    function helper(currentNode, reverseList, visited) {
        // Помечаем текущий узел как посещённый
        visited.add(currentNode);

        // Рекурсивно проходим по всем соседям
        for (let neighbour of reverseList[currentNode]) {
            if (!visited.has(neighbour)) {
                helper(neighbour, reverseList, visited);
            }
        }
    }

    return parentsList;
};

console.log(getAncestors(n, edges));
