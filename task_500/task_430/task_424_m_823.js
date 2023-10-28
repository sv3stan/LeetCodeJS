// Дан массив уникальных целых чисел arr, 
// где каждое целое число arr[i] строго больше 1.
// Мы создаем двоичное дерево, используя эти целые числа, 
// и каждое число можно использовать любое количество раз.
// Значение каждого нелистового узла должно быть равно 
// произведению значений его дочерних узлов.
// Возвращает количество двоичных деревьев, которые мы можем создать.
// Ответ может быть слишком большим, поэтому верните ответ по модулю 109 + 7.
// 823

arr = [2, 4, 5, 10];

arr = [2, 4]
var numFactoredBinaryTrees = function (arr) {
    const len = arr.length;
    const MOD = 1000 * 1000 * 1000 + 7;
    arr.sort((a, b) => a - b);
    const dp = Array.from({ length: len }).fill(1);

    const point = new Map();

    for (let i = 0; i < len; i++) point.set(arr[i], i);


    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] % arr[j] === 0) {
                const temp = arr[i] / arr[j];
                if (point.has(temp)) dp[i] = (dp[i] + dp[j] * dp[point.get(temp)]) % MOD;
            }
        }
    }

    return dp.reduce((acc, count) => (acc + count) % MOD, 0);
};

console.log(numFactoredBinaryTrees(arr))