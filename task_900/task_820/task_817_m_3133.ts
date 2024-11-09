/**
You are given two integers n and x.You have to construct an array of positive integers nums of size n where for every 0 <= i < n - 1, nums[i + 1] is greater than nums[i], and the result of the bitwise AND operation between all elements of nums is x. Return the minimum possible value of nums[n - 1].
Вам даны два целых числа n и x. Вам нужно создать массив положительных целых чисел nums размера n, где для каждого 0 <= i < n - 1, nums[i + 1] больше, чем nums[i], и результат побитовой операции AND между всеми элементами чисел — это х. Верните минимально возможное значение nums[n - 1].
 */

let n = 2;
let x = 7;
function minEnd(n: number, x: number): number {
    n--;
    let result: bigint = BigInt(x);

    for (let i = 0; i < 31; ++i) {
        if (((x >> i) & 1) ^ 1) {
            result |= BigInt(n & 1) << BigInt(i);
            n >>= 1;
        }
    }

    result |= BigInt(n) << BigInt(31);

    return Number(result);
}

console.log(minEnd(n, x));
