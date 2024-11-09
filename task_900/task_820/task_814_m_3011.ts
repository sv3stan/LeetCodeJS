/*
You are given a 0-indexed array of positive integers nums. In one operation, you can swap any two adjacent elements if they have the same number of set bits .You are allowed to do this operation any number of times (including zero). Return true if you can sort the array, else return false.
Вам дан массив положительных целых чисел с индексом 0. За одну операцию можно поменять местами любые два соседних элемента, если они имеют одинаковое количество установить биты . Вы можете проделать эту операцию любое количество раз (включая ноль). Верните true, если вы можете отсортировать массив, иначе верните false.
*/

let nums = [8, 4, 2, 30, 15];

function canSortArray(nums: number[]): boolean {
    let currentMax = nums[0];
    let currentMin = nums[0];
    let previousBitQnt = nums[0].toString(2).split('1').length - 1;
    let maxInPreviousGroup;

    for (let i = 1; i < nums.length; i++) {
        const currentBitQnt = nums[i].toString(2).split('1').length - 1;

        // Если количество установленных бит изменилось, проверим порядок между группами
        if (currentBitQnt !== previousBitQnt) {
            if (
                maxInPreviousGroup !== undefined &&
                maxInPreviousGroup > currentMin
            ) {
                return false; // Нарушен порядок между группами
            }

            maxInPreviousGroup = currentMax;

            // Обновляем максимум и минимум для новой группы
            currentMax = nums[i];
            currentMin = nums[i];
        } else {
            // Внутри группы обновляем максимум и минимум
            currentMax = Math.max(currentMax, nums[i]);
            currentMin = Math.min(currentMin, nums[i]);
        }

        // Обновляем количество бит для следующей итерации
        previousBitQnt = currentBitQnt;
    }

    // Финальная проверка на порядок между последней группой и предыдущей
    if (maxInPreviousGroup !== undefined && maxInPreviousGroup > currentMin) {
        return false;
    }

    return true;
}

console.log(canSortArray(nums));
