/**
Вам дают 0-индексированные массивы, состоящие из положительных целых чисел. Вы можете выбрать два индекса i и j, так что i! Вернуть максимальное значение Nums [i] + nums [j], которые вы можете получить по всем возможным индексам i и j, которые удовлетворяют условиям.
 */

function maximumSum(nums: number[]): number {
    const digitSum = (num: number): number => {
        return num
            .toString()
            .split('')
            .reduce((sum, digit) => sum + parseInt(digit), 0);
    };

    const digitSumMap: { [key: number]: number } = {};
    let maxResult = -1;

    for (const num of nums) {
        const currentSum = digitSum(num);

        if (currentSum in digitSumMap) {
            maxResult = Math.max(maxResult, num + digitSumMap[currentSum]);
            if (num > digitSumMap[currentSum]) {
                digitSumMap[currentSum] = num;
            }
        } else {
            digitSumMap[currentSum] = num;
        }
    }

    return maxResult;
}
