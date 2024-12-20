/**
You are given an integer array nums, an integer k, and an integer multiplier. You need to perform k operations on nums. In each operation: Find the minimum value x in nums. If there are multiple occurrences of the minimum value, select the one that appears first. Replace the selected minimum value x with x * multiplier. Return an integer array denoting the final state of nums after performing all k operations.
Вам дан целочисленный массив nums, целое число k и целочисленный множитель. Вам нужно выполнить k операций над числами. В каждой операции: Найдите минимальное значение x в числах. Если минимальное значение встречается несколько раз, выберите то, которое появляется первым. Замените выбранное минимальное значение x множителем x *. Возвращает целочисленный массив, обозначающий конечное состояние чисел после выполнения всех k операций.
 */

function getFinalState(
    nums: number[],
    k: number,
    multiplier: number,
): number[] {
    let len = nums.length;
    while (k--) {
        let minIndex = 0;
        for (let i = 0; i < len; i++) {
            if (nums[i] < nums[minIndex]) minIndex = i;
        }
        nums[minIndex] *= multiplier;
    }
    return nums;
}
