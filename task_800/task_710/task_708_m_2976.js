/**
Вам даны две исходные и целевые строки с нулевым индексом, обе длиной n и состоящие из строчных английских букв. Вам также даны два исходных и измененных символьных массива с индексом 0, а также стоимость целочисленного массива, где стоимость[i] представляет собой стоимость замены исходного символа[i] на измененный[i].
Вы начинаете с источника строки. За одну операцию вы можете выбрать символ x из строки и заменить его на символ y стоимостью z, если существует какой-либо индекс j такой, что cost[j] == z, original[j] == x и изменено[j] == y.
Возвращает минимальную стоимость преобразования источника строки в цель строки с помощью любого количества операций. Если невозможно преобразовать источник в цель, верните -1.
Обратите внимание, что могут существовать индексы i, j такие, что original[j] == original[i] и измененный[j] == измененный[i].

Постройте граф, в котором каждая буква является узлом, и постройте edge(a, b) с весом c, если мы можем перейти от символа a к букве b со стоимостью c. (Оставьте тот, у которого наименьшая стоимость, на случай, если между a и b имеется несколько ребер).

Вычислите кратчайший путь для каждой пары символов (source[i], target[i]). Сумма стоимости по всем i в диапазоне [0, source.length - 1]. Если между source[i] и target[i] нет пути, ответ — -1.

Любые алгоритмы кратчайшего пути будут работать, поскольку у нас всего 26 узлов. Поскольку у нас есть не более 26 * 26 пар, мы можем сохранить результат, чтобы избежать повторного расчета.

Мы также можем использовать алгоритм Флойда Уоршалла для предварительного вычисления всех результатов.
 */

let source = 'abcd';
let target = 'acbe';
let original = ['a', 'b', 'c', 'c', 'e', 'd'];
let changed = ['b', 'c', 'b', 'e', 'b', 'e'];
let cost = [2, 5, 5, 1, 2, 20];

let minimumCost = function (source, target, original, changed, cost) {
    const ALPHABET_LENGTH = 26;

    let ans = 0;
    const graph = Array.from({ length: ALPHABET_LENGTH }, () =>
        Array(ALPHABET_LENGTH).fill(Infinity),
    );

    for (let i = 0; i < original.length; ++i) {
        let from = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
        let to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
        graph[from][to] = Math.min(graph[from][to], cost[i]);
    }

    for (let k = 0; k < ALPHABET_LENGTH; k++) {
        for (let i = 0; i < ALPHABET_LENGTH; i++) {
            for (let j = 0; j < ALPHABET_LENGTH; j++) {
                graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
            }
        }
    }

    for (let i = 0; i < source.length; i++) {
        if (source[i] === target[i]) continue;

        const from = source[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const to = target[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if (graph[from][to] === Infinity) {
            return -1;
        }

        ans += graph[from][to];
    }

    return ans;
};

console.log(minimumCost(source, target, original, changed, cost));
