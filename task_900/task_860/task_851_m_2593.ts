/**
Вам дан массив nums, состоящий из целых положительных чисел. Начиная со счетом = 0, примените следующий алгоритм: Выберите наименьшее целое число массива, которое не отмечено. Если ничья, выберите тот, у которого наименьший индекс. Добавьте значение выбранного целого числа к результату. Отметьте выбранный элемент и два соседних с ним элемента, если они существуют. Повторяйте, пока все элементы массива не будут отмечены. Верните оценку, полученную после применения описанного выше алгоритма.
 */

function findScore(nums: number[]): number {
    const marked: boolean[] = new Array(nums.length).fill(false);
    const queue = MinPriorityQueue.from(
        nums.map((item, index) => [index, item + index / 10]),
    );
    let ans = 0;

    while (queue.size()) {
        const { element } = queue.dequeue();
        if (marked[element]) continue;
        ans += nums[element];
        marked[element] = marked[element + 1] = marked[element - 1] = true;
    }

    return ans;
}
