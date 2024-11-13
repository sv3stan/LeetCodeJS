/*
You are given a 2D integer array items where items[i] = [pricei, beautyi] denotes the price and beauty of an item respectively. You are also given a 0-indexed integer array queries.For each queries[j], you want to determine the maximum beauty of an item whose price is less than or equal to queries[j].If no such item exists, then the answer to this query is 0. Return an array answer of the same length as queries where answer[j] is the answer to the jth query.
Вам дан двумерный целочисленный массив items, где items[i] = [pricei, beautyi] обозначает цену и красоту предмета соответственно. Вам также предоставляются запросы целочисленного массива с нулевым индексом. Для каждого запроса[j] вы хотите определить максимальную красоту предмета, цена которого меньше или равна запросу [j]. Если такого элемента не существует, то ответом на этот запрос будет 0. Возвращает ответ в виде массива той же длины, что и запросы, где ответ[j] — это ответ на j-й запрос.
*/
let items = [
    [1, 2],
    [3, 2],
    [2, 4],
    [5, 6],
    [3, 5],
];
let queries = [1, 2, 3, 4, 5, 6];

function maximumBeauty(items: number[][], queries: number[]): number[] {
    // Шаг 1: Сортируем items по цене
    items.sort((a, b) => a[0] - b[0]);

    const maxBeautyForPrice: Map<number, number> = new Map();
    let maxBeauty = 0;

    // Шаг 2: Проходим по items и сохраняем накопленный максимум красоты
    items.forEach(([price, beauty]) => {
        maxBeauty = Math.max(maxBeauty, beauty);
        maxBeautyForPrice.set(price, maxBeauty);
    });

    // Шаг 3: Сортируем queries, чтобы работать с накопленным максимумом
    const sortedQueries = queries.map((value, index) => [value, index]);
    sortedQueries.sort((a, b) => a[0] - b[0]);

    const result: number[] = new Array(queries.length).fill(0);
    const prices = Array.from(maxBeautyForPrice.keys()).sort((a, b) => a - b);

    let i = 0;

    // Шаг 4: Для каждого запроса находим максимальную красоту для цены ≤ queries[j]
    for (const [query, originalIndex] of sortedQueries) {
        while (i < prices.length && prices[i] <= query) {
            i++;
        }

        if (i > 0) {
            result[originalIndex] = maxBeautyForPrice.get(prices[i - 1])!;
        } else {
            result[originalIndex] = 0;
        }
    }

    return result;
}

console.log(maximumBeauty(items, queries));
