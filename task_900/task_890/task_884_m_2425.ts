/**
Вам даны два массива с нулевым индексом, nums1 и nums2, состоящие из неотрицательных целых чисел. Существует еще один массив, nums3, который содержит побитовое исключающее ИЛИ всех пар целых чисел между nums1 и nums2 (каждое целое число в nums1 сопряжено с каждым целым числом в nums2 ровно один раз). Вернуть побитовое исключающее ИЛИ всех целых чисел в nums3.
 */

function xorAllNums(nums1: number[], nums2: number[]): number {
    const m = nums1.length;
    const n = nums2.length;

    const freq: { [key: number]: number } = {};

    for (const num of nums1) {
        if (freq[num] === undefined) {
            freq[num] = 0;
        }
        freq[num] += n;
    }

    for (const num of nums2) {
        if (freq[num] === undefined) {
            freq[num] = 0;
        }
        freq[num] += m;
    }

    let ans = 0;
    for (const [num, count] of Object.entries(freq)) {
        const parsedNum = parseInt(num);
        if (count % 2 === 1) {
            ans ^= parsedNum;
        }
    }

    return ans;
}
