/*
Вам дано целое положительное число k. Вам также предоставляется:
двумерный целочисленный массив rowConditions размера n, где rowConditions[i] = [abovei, Belowi] и
двумерный целочисленный массив colConditions размера m, где colConditions[i] = [lefti, righti].
Два массива содержат целые числа от 1 до k.
Вам нужно построить матрицу размера k x k, содержащую каждое число от 1 до k ровно один раз. Остальные ячейки должны иметь значение 0.
Матрица также должна удовлетворять следующим условиям:
Число выше i должно появиться в строке, которая находится строго над строкой, в которой встречается число ниже i для всех i от 0 до n - 1.
Число lefti должно появиться в столбце, который находится строго слева от столбца, в котором стоит число righti для всех i от 0 до m - 1.
Возвращает любую матрицу, удовлетворяющую условиям. Если ответа не существует, верните пустую матрицу.
 */

let k = 3;
let rowConditions = [
    [1, 2],
    [3, 2],
];

let colConditions = [
    [2, 1],
    [3, 2],
];

let buildMatrix = function (k, rowConditions, colConditions) {
    function topologicalSort(k, conditions) {
        const graph = Array.from({ length: k + 1 }, () => []);
        const inDegree = Array(k + 1).fill(0);

        for (const [u, v] of conditions) {
            graph[u].push(v);
            inDegree[v]++;
        }

        const queue = [];
        for (let i = 1; i <= k; i++) {
            if (inDegree[i] === 0) queue.push(i);
        }

        const order = [];
        while (queue.length > 0) {
            const node = queue.shift();
            order.push(node);
            for (const neighbor of graph[node]) {
                inDegree[neighbor]--;
                if (inDegree[neighbor] === 0) queue.push(neighbor);
            }
        }

        return order.length === k ? order : [];
    }

    const rowOrder = topologicalSort(k, rowConditions);
    const colOrder = topologicalSort(k, colConditions);

    if (rowOrder.length === 0 || colOrder.length === 0) return [];

    const rowPos = {};
    const colPos = {};

    for (let i = 0; i < k; i++) {
        rowPos[rowOrder[i]] = i;
        colPos[colOrder[i]] = i;
    }

    const matrix = Array.from({ length: k }, () => Array(k).fill(0));

    for (let num = 1; num <= k; num++) {
        matrix[rowPos[num]][colPos[num]] = num;
    }

    return matrix;
};

console.log(buildMatrix(k, rowConditions, colConditions));
