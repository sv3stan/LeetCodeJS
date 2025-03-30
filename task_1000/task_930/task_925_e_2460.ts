﻿/**
Вам дают 0-индексированные массивы размера N, состоящие из неотрицательных целых чисел. Вам необходимо применить операции N - 1 к этому массиву, где в операции ITH (0 -индексация) вы примените следующее на элементе ITH Nums: Если nums [i] == nums [i + 1], тогда умножьте Nums [i] на 2 и установите Nums [i + 1] на 0. В противном случае вы пропускаете эту операцию. После выполнения всех операций переключите все 0 до конца массива. Например, массив [1,0,2,0,0,1] после перемещения всех его 0 до конца составляет [1,2,1,0,0,0,0]. Вернуть полученный массив. Обратите внимание, что операции применяются последовательно, не все одновременно.
 */

function applyOperations(nums: number[]): number[] {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }
    const result: number[] = [];
    const zeros: number[] = [];
    for (const num of nums) {
        if (num !== 0) {
            result.push(num);
        } else {
            zeros.push(num);
        }
    }
    return result.concat(zeros);
}
