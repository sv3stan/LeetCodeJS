/**
You are given an integer n and a 2D integer array queries. There are n cities numbered from 0 to n - 1. Initially, there is a unidirectional road from city i to city i + 1 for all 0 <= i < n - 1. queries[i] = [ui, vi] represents the addition of a new unidirectional road from city ui to city vi.After each query, you need to find the length of the shortest path from city 0 to city n - 1. Return an array answer where for each i in the range [0, queries.length - 1], answer[i] is the length of the shortest path from city 0 to city n - 1 after processing the first i + 1 queries.
Вам задано целое число n и запросы к двумерному целочисленному массиву. Имеется n городов, пронумерованных от 0 до n - 1. Изначально существует односторонняя дорога из города i в город i + 1 для всех 0 <= i < n - 1. query[i] = [ui, vi] представляет собой добавление новой односторонней дороги из города ui в город vi. После каждого запроса вам необходимо найти длину кратчайшего пути от города 0 до города n – 1. Возвращает массив ответа, где для каждого i в диапазоне [0, query.length - 1] ответ[i] — это длина кратчайшего пути от города 0 до города n – 1 после обработки первых i + 1 запросов.
 */

let n = 5;
let queries = [
    [2, 4],
    [0, 2],
    [0, 4],
];

function shortestDistanceAfterQueries(
    n: number,
    queries: number[][],
): number[] {
    const hash: Map<number, number[]> = new Map();
    const answer: number[] = [];

    // Изначально добавляем дороги (i -> i + 1)
    for (let i = 0; i < n - 1; i++) {
        if (!hash.has(i)) hash.set(i, []);
        hash.get(i)!.push(i + 1);
    }

    const bfs = (): number => {
        const queue: [number, number][] = [[0, 0]]; // [город, длина пути]
        const visit = new Set<number>();

        while (queue.length > 0) {
            const [city, distance] = queue.shift()!;

            if (city === n - 1) return distance; // Достигли города n-1
            if (visit.has(city)) continue;

            visit.add(city);

            for (const neighbor of hash.get(city) || []) {
                if (!visit.has(neighbor)) {
                    queue.push([neighbor, distance + 1]);
                }
            }
        }

        return -1; // Нет пути до города n-1
    };

    for (const [u, v] of queries) {
        // Добавляем новую дорогу u -> v
        if (!hash.has(u)) hash.set(u, []);
        hash.get(u)!.push(v);

        // Находим кратчайший путь от 0 до n-1
        answer.push(bfs());
    }

    return answer;
}

console.log(shortestDistanceAfterQueries(n, queries));
