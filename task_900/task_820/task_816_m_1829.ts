/**
You are given a sorted array nums of n non-negative integers and an integer maximumBit.You want to perform the following query n times: Find a non-negative integer k < 2maximumBit such that nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k is maximized.k is the answer to the ith query. Remove the last element from the current array nums. Return an array answer, where answer[i] is the answer to the ith query.
Вам дан отсортированный массив nums из n неотрицательных целых чисел и целое число MaximumBit. Вы хотите выполнить следующий запрос n раз: Найдите неотрицательное целое число k < 2maximumBit такое, что nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k максимизируется. k — ответ на i-й запрос. Удалить последний элемент из текущего массива nums. Вернуть ответ в виде массива, где ответ[i] — это ответ на i-й запрос.
 */

let nums = [2, 3, 4, 7];
let maximumBit = 3;

function getMaximumXor(nums: number[], maximumBit: number): number[] {
    const maxNum = (1 << maximumBit) - 1; // максимальное значение для k (все биты установлены в 1)
    let curXOR = 0;
    const res: number[] = new Array(nums.length);

    // 1. Вычисляем полный XOR всего массива
    for (const num of nums) {
        curXOR ^= num;
    }

    // 2. Идем от конца к началу, удаляя последний элемент и добавляя результат в answer
    for (let i = nums.length - 1; i >= 0; i--) {
        res[nums.length - 1 - i] = curXOR ^ maxNum; // находим k, максимально увеличивающий XOR
        curXOR ^= nums[i]; // убираем последний элемент из текущего XOR
    }

    return res;
}

console.log(getMaximumXor(nums, maximumBit)); // [3, 2, 6, 7]
