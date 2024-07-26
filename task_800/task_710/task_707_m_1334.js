/**
Имеется n городов, пронумерованных от 0 до n-1. Учитывая ребра массива, где ребра [i] = [fromi, toi, Weighti] представляют собой двунаправленное и взвешенное ребро между городами fromi и toi, и учитывая целое число distanceThreshold.
Возвращает город с наименьшим количеством городов, до которых можно добраться по некоторому пути и расстояние до которых не превышает distanceThreshold. Если таких городов несколько, верните город с наибольшим числом.
Обратите внимание, что расстояние пути, соединяющего города i и j, равно сумме весов ребер на этом пути.
 */

let n = 4;
let edges = [
    [0, 1, 3],
    [1, 2, 1],
    [1, 3, 4],
    [2, 3, 1],
];
let distanceThreshold = 4;

let findTheCity = function (n, edges, distanceThreshold) {
    const graph = Array.from({ length: n }, () => Array(n).fill(Infinity));

    for (let i = 0; i < n; i++) {
        graph[i][i] = 0;
    }

    edges.forEach(edge => {
        const [from, to, weight] = edge;
        graph[from][to] = weight;
        graph[to][from] = weight;
    });

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (graph[i][k] + graph[k][j] < graph[i][j]) {
                    graph[i][j] = graph[i][k] + graph[k][j];
                }
            }
        }
    }

    let minCityQuantity = -1;
    let minCount = n;

    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++) {
            if (i == j) continue;
            if (graph[i][j] <= distanceThreshold) count++;
        }
        if (count <= minCount) {
            minCount = count;
            minCityQuantity = i;
        }
    }
    return minCityQuantity;
};

console.log(findTheCity(n, edges, distanceThreshold));
