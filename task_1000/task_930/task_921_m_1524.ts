/*
Учитывая массив целых чисел, верните количество субаррей с нечетной суммой. Поскольку ответ может быть очень большим, вернуть его модуль 109 + 7.
*/

function numOfSubarrays(arr: number[]): number {
    const MOD = 1_000_000_007;

    let evenCount = 1;
    let oddCount = 0;
    let currentSum = 0;
    let result = 0;

    for (const num of arr) {
        currentSum += num;
        if (currentSum % 2 === 0) {
            result = (result + oddCount) % MOD;
            evenCount++;
        } else {
            result = (result + evenCount) % MOD;
            oddCount++;
        }
    }

    return result;
}
