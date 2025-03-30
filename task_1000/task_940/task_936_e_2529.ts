/**
Учитывая массивные числа, отсортированные в не декоративном порядке, верните максимум между количеством положительных целых чисел и количеством отрицательных целых чисел. Другими словами, если количество положительных целых чисел в NUM - POS, а количество отрицательных целых чисел нега, то верните максимум POS и NEG. Обратите внимание, что 0 не является ни положительным, ни отрицательным.
 */

function maximumCount(nums: number[]): number {
    let negativeCnt = 0;
    let positiveCnt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            positiveCnt++;
        }
        if (nums[i] < 0) {
            negativeCnt++;
        }
    }
    return Math.max(negativeCnt, positiveCnt);
}
