/*
Существует неориентированное дерево с n узлами, пронумерованными от 0 до n - 1. Вам дан двумерный целочисленный массив с нулевым индексом ребер длины n - 1, где ребра [i] = [ui, vi] указывают, что существует ребро между узлы ui и vi в дереве. Вам также дан положительное целое число k и массив неотрицательных целых чисел nums с индексом 0 длины n, где nums[i] представляет значение узла с номером i.
Алиса хочет, чтобы сумма значений узлов дерева была максимальной, для чего Алиса может выполнить над деревом следующую операцию любое количество раз (включая ноль):
Выберите любое ребро [u, v], соединяющее узлы u и v, и обновите их значения следующим образом:
nums[u] = nums[u] XOR k
nums[v] = nums[v] XOR k
Возвращает максимально возможную сумму значений, которую Алиса может получить, выполнив операцию любое количество раз.
*/

let nums = [1, 2, 1];
let k = 3;
let edges = [
    [0, 1],
    [0, 2],
];

(nums = [7, 7, 7, 7, 7, 7]),
    (k = 3),
    (edges = [
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
    ]);

let maximumValueSum = function (nums, k, edges) {
    const dp = Array.from({ length: nums.length }, () => Array(2).fill(-1));

    function maxSum(index, even, nums, k, dp) {
        // Если мы прошли все элементы
        if (index === nums.length) {
            // Если операция была выполнена на нечетном количестве элементов, вернуть INT_MIN
            return even === 1 ? 0 : Number.MIN_SAFE_INTEGER;
        }

        // Проверка, есть ли уже вычисленный результат
        if (dp[index][even] !== -1) {
            return dp[index][even];
        }

        // Без выполнения операции XOR
        const noXorDone = nums[index] + maxSum(index + 1, even, nums, k, dp);
        // С выполнением операции XOR
        const xorDone =
            (nums[index] ^ k) + maxSum(index + 1, even ^ 1, nums, k, dp);

        return (dp[index][even] = Math.max(xorDone, noXorDone));
    }

    return maxSum(0, 1, nums, k, dp);
};

console.log(maximumValueSum(nums, k, edges));
