﻿/**
Вам дан целочисленный массив arr длины n, который представляет собой перестановку целых чисел в диапазоне [0, n - 1]. Мы разбиваем arr на некоторое количество фрагментов (т. е. разделов) и индивидуально сортируем каждый фрагмент. После их объединения результат должен равняться отсортированному массиву. Возвращает наибольшее количество фрагментов, которые мы можем сделать для сортировки массива.
 */

function maxChunksToSorted(arr: number[]): number {
    let max = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        if (max === i) {
            count++;
        }
    }
    return count;
}
