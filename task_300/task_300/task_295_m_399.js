// Вам дан массив уравнений пар переменных и массив значений действительных чисел, 
// где уравнения[i] = [Ai, Bi] и значения[i] представляют собой уравнение 
// Ai / Bi = значения[i].Каждый Ai или Bi представляет собой строку, представляющую одну переменную.
// Вам также даются несколько запросов, где query[j] = [Cj, Dj] представляет собой j - й запрос, 
// в котором вы должны найти ответ для Cj / Dj = ?.
// Вернуть ответы на все запросы.Если единственный ответ не может быть определен, верните - 1, 0.
// Примечание.Ввод всегда действителен.Вы можете предположить, что обработка запросов не приведет 
// к делению на ноль и что противоречия нет.
// Примечание.Переменные, которых нет в списке уравнений, не определены, 
// поэтому для них невозможно определить ответ.
// 399

equations = [["a", "b"], ["b", "c"]], values = [2.0, 3.0], queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]

var calcEquation = function (equations, values, queries) {
    const hashTable = new Map(); // Граф, представленный в виде хэш-карты

    // Добавление рёбер в граф
    for (let i = 0; i < equations.length; i++) {
        const [Ai, Bi] = equations[i];
        const val = values[i];

        if (!hashTable.has(Ai)) {
            hashTable.set(Ai, new Map());
        }
        if (!hashTable.has(Bi)) {
            hashTable.set(Bi, new Map());
        }

        hashTable.get(Ai).set(Bi, val);
        hashTable.get(Bi).set(Ai, 1 / val);
    }


    // console.log(hashTable)
    // Функция для поиска пути с помощью BFS
    function bfs(start, end) {
        if (!hashTable.has(start) || !hashTable.has(end)) {
            return -1.0;
        }

        const visited = new Set();
        const queue = [[start, 1.0]];

        while (queue.length > 0) {
            const [node, currentVal] = queue.shift();

            if (node === end) {
                return currentVal;
            }

            visited.add(node);

            for (const [neighbor, weight] of hashTable.get(node)) {
                if (!visited.has(neighbor)) {
                    queue.push([neighbor, currentVal * weight]);
                }
            }
        }

        return -1.0;
    }

    const answer = [];

    for (const query of queries) {
        const [Cj, Dj] = query;
        const result = bfs(Cj, Dj);
        answer.push(result);
    }

    return answer;
};


console.log(calcEquation(equations, values, queries))