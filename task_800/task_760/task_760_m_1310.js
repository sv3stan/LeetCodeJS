/**
Вам дан массив положительных целых чисел. Вам также даются запросы к массиву, где query[i] = [lefti, righti].
Для каждого запроса я вычисляю XOR элементов от lefti до righti (то есть arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).
Верните ответ в виде массива, где ответ[i] — это ответ на i-й запрос.
 */

let arr = [1, 3, 4, 8];
let queries = [
    [0, 1],
    [1, 2],
    [0, 3],
    [3, 3],
];

let xorQueries = function (arr, queries) {
    const xorPrefixSum = new Array(arr.length + 1).fill(0);
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        xorPrefixSum[i + 1] = xorPrefixSum[i] ^ arr[i];
    }

    for (let i = 0; i < queries.length; i++) {
        res.push(xorPrefixSum[queries[i][0]] ^ xorPrefixSum[queries[i][1] + 1]);
    }
    return res;
};

console.log(xorQueries(arr, queries));
