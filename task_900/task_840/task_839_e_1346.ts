/**
Given an array arr of integers, check if there exist two indices i and j such that : i != j 0 <= i, j < arr.length arr[i] == 2 * arr[j]
Учитывая массив целых чисел, проверьте, существуют ли два индекса i и j такие, что: я != j 0 <= i, j < длина аранж. arr[i] == 2 * arr[j]
 */

function checkIfExist(arr: number[]): boolean {
    const hash = new Map<number, number>();

    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], i);
    }

    for (let i = 0; i < arr.length; i++) {
        const target = arr[i] * 2;
        if (hash.has(target) && hash.get(target) !== i) {
            return true;
        }
    }

    return false;
}
