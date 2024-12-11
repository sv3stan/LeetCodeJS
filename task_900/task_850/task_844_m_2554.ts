/**
You are given an integer array banned and two integers n and maxSum. You are choosing some number of integers following the below rules: The chosen integers have to be in the range [1, n]. Each integer can be chosen at most once. The chosen integers should not be in the array banned. The sum of the chosen integers should not exceed maxSum. Return the maximum number of integers you can choose following the mentioned rules.
Вам дан запрещенный целочисленный массив и два целых числа n и maxSum. Вы выбираете некоторое количество целых чисел, следуя следующим правилам: Выбранные целые числа должны находиться в диапазоне [1, n]. Каждое целое число можно выбрать не более одного раза. Выбранные целые числа не должны находиться в запрещенном массиве. Сумма выбранных целых чисел не должна превышать maxSum. Верните максимальное количество целых чисел, которое вы можете выбрать, следуя указанным правилам.
 */

function maxCount(banned: number[], n: number, maxSum: number): number {
    const hash = new Set(banned);
    let sum = 0;
    let index = 1;
    let qnt = 0;
    while (index <= n) {
        if (!hash.has(index)) {
            sum += index;
            qnt++;
        }

        index++;

        if (sum > maxSum) {
            return qnt - 1;
        }
    }
    return qnt;
}
