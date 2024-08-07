/**
Вам дан массив nums, состоящий из n целых положительных чисел. Вы вычислили сумму всех непустых непрерывных подмассивов из массива, а затем отсортировали их в неубывающем порядке, создав новый массив из n * (n + 1) / 2 чисел.
Верните сумму чисел от индекса слева до индекса справа (с индексом 1) включительно в новом массиве. Поскольку ответ может быть огромным числом, верните его по модулю 109 + 7.
 */

let nums = [1, 2, 3, 4];
let n = 4;
let left = 1;
let right = 5;

let rangeSum = function (nums, n, left, right) {
    const prefixSum = Array.from({ length: n + 1 }).fill(0);
    const subarraySum = [];
    for (let i = 1; i <= n; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i - 1];
    }

    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            subarraySum.push(prefixSum[j] - prefixSum[i - 1]);
        }
    }

    subarraySum.sort((a, b) => a - b);

    let result = 0;
    let start = left - 1;
    let end = right - 1;

    while (start <= end) {
        if (start !== end) {
            result =
                (result + subarraySum[start] + subarraySum[end]) % 1000000007;
        } else {
            result = (result + subarraySum[start]) % 1000000007;
        }
        start++;
        end--;
    }

    // for (let i = left - 1; i < right; i++) {
    //     result = (result + subarraySum[i]) % 1000000007;
    // }

    return result;
};

console.log(rangeSum(nums, n, left, right));
