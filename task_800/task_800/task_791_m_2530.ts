/**
Вам дан целочисленный массив nums с нулевым индексом и целое число k. У вас стартовый счет 0.
За одну операцию:
выберите индекс i такой, что 0 <= i < nums.length,
увеличьте свой счет на nums[i] и замените nums[i] на ceil(nums[i]/3).
Возвращает максимально возможный балл, который вы можете получить после применения ровно k операций.
Функция потолка ceil(val) — это наименьшее целое число, большее или равное val.
 */

function maxKelements(nums: number[], k: number): number {
    const queue = new MaxPriorityQueue({ compare: (a, b) => b - a });
    for (const item of nums) {
        queue.enqueue(item);
    }
    let points = 0;
    while (k) {
        const item = queue.dequeue();
        points += item;
        queue.enqueue(Math.ceil(item / 3));
        k--;
    }
    return points;
}
