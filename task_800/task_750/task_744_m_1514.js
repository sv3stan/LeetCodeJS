/*
Вам дан неориентированный взвешенный граф из n узлов (с индексом 0), представленный списком ребер, где ребра [i] = [a, b] — это неориентированное ребро, соединяющее узлы a и b с вероятностью успешного прохождения, которая край succProb[i].
Учитывая начало и конец двух узлов, найдите путь с максимальной вероятностью успеха от начала до конца и верните его вероятность успеха.
Если пути от начала до конца нет, верните 0. Ваш ответ будет принят, если он отличается от правильного не более чем на 1e-5. 
*/

let n = 3;
let edges = [
    [0, 1],
    [1, 2],
    [0, 2],
];
let succProb = [0.5, 0.5, 0.2];
let start = 0;
let end = 2;

let maxProbability = function (n, edges, succProb, start, end) {
    const temp = Array(n).fill(0);
    const graph = temp.reduce((el, _, i) => el.set(i, []), new Map());
    edges.forEach(([u, v], i) => {
        graph.get(u).push([v, succProb[i]]);
        graph.get(v).push([u, succProb[i]]);
    });

    const queue = [[start, 1]];
    temp[start] = 1;

    for (let [node, currPoint] of queue) {
        for (let [item, nextPoint] of graph.get(node)) {
            if (currPoint * nextPoint > temp[item]) {
                temp[item] = currPoint * nextPoint;
                queue.push([item, temp[item]]);
            }
        }
    }

    return temp[end];
};

console.log(maxProbability(n, edges, succProb, start, end));
