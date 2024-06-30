/*
У Алисы и Боба есть неориентированный граф из n узлов и трех типов ребер:
Тип 1: может пройти только Алиса.
Тип 2: может пройти только Боб.
Тип 3: могут пройти как Алиса, так и Боб.
Учитывая ребра массива, где ребра [i] = [typei, ui, vi] представляют собой двунаправленное ребро типа typei между узлами ui и vi, найдите максимальное количество ребер, которые вы можете удалить, чтобы после удаления ребер граф все еще мог быть полностью пройден как Алисой, так и Бобом. Граф полностью пройден Алисой и Бобом, если, начиная с любого узла, они могут достичь всех остальных узлов.
Верните максимальное количество ребер, которое вы можете удалить, или верните -1, если Алиса и Боб не могут полностью пройти граф.
*/
//1579
let n = 4;
let edges = [
    [3, 1, 2],
    [3, 2, 3],
    [1, 1, 3],
    [1, 2, 4],
    [1, 1, 2],
    [2, 3, 4],
];

let maxNumEdgesToRemove = function (n, edges) {
    let unionA = Array(n + 1)
        .fill(0)
        .map((_, i) => i);
    let unionB = Array(n + 1)
        .fill(0)
        .map((_, i) => i);

    function find(x, root) {
        if (root[x] !== x) {
            root[x] = find(root[x], root);
        }
        return root[x];
    }

    function union(x, y, root) {
        let rootX = find(x, root);
        let rootY = find(y, root);
        if (rootX !== rootY) {
            root[rootX] = rootY;
            return true;
        }
        return false;
    }

    let res = 0;
    let aliceEdges = 0;
    let bobEdges = 0;

    // Алиса и Боб
    for (let edge of edges) {
        if (edge[0] === 3) {
            if (union(edge[1], edge[2], unionA)) {
                aliceEdges++;
                if (union(edge[1], edge[2], unionB)) {
                    bobEdges++;
                }
            } else {
                res++;
            }
        }
    }

    let rootA_copy = [...unionA];

    // только Алиса
    for (let edge of edges) {
        if (edge[0] === 1) {
            if (union(edge[1], edge[2], unionA)) {
                aliceEdges++;
            } else {
                res++;
            }
        }
    }

    // только Боб
    unionA = [...rootA_copy];
    for (let edge of edges) {
        if (edge[0] === 2) {
            if (union(edge[1], edge[2], unionB)) {
                bobEdges++;
            } else {
                res++;
            }
        }
    }

    return aliceEdges === bobEdges && aliceEdges === n - 1 ? res : -1;
};

console.log(maxNumEdgesToRemove(n, edges));
