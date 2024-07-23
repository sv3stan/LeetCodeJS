/**
Вам дан целочисленный массив чисел с нулевым индексом. За одну операцию можно сделать следующее:
Выберите два целых числа, которые равны.
Удалите оба целых числа из чисел, образуя пару.
Операция выполняется над числами столько раз, сколько возможно.
Возвращает массив целых чисел с индексом 0 и размером 2, где ответ[0] — это количество сформированных пар, а ответ[1] — это количество оставшихся целых чисел в числах после выполнения операции максимально возможное количество раз.
 */

let nums = [1, 3, 2, 1, 3, 2, 2];

function numberOfPairs(nums: number[]): number[] {
    const hash = new Map<number, number>();
    let pair: number = 0;
    let remaind: number = 0;

    for (let i = 0; i < nums.length; i++) {
        hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
    }

    for (let value of hash.values()) {
        pair += Math.floor(value / 2);
        remaind += value % 2;
    }

    return [pair, remaind];
}

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]));
