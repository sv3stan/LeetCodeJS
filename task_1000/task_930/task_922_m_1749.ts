/**
Вам дают целочисленные массивы. Абсолютная сумма Subarray [numsl, numsl + 1, ..., numsr-1, numsr]-это ABS (numSl + numsl + 1 + ... + numsr-1 + numsr). Вернуть максимальную абсолютную сумму любого (возможно пустого) субрай, полученных. Обратите внимание, что ABS (x) определяется следующим образом: Если x -отрицательное целое число, то ABS (x) = -x. Если x является неотрицательным целым числом, то ABS (x) = x.
 */

function maxAbsoluteSum(nums: number[]): number {
    let maxSum = 0;
    let minSum = 0;
    let globalMax = 0;

    for (const num of nums) {
        maxSum = Math.max(maxSum + num, num);
        minSum = Math.min(minSum + num, num);

        globalMax = Math.max(globalMax, Math.abs(maxSum), Math.abs(minSum));
    }
    return globalMax;
}
