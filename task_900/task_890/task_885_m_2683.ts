﻿/*
Массив с индексом 0, полученный длиной n, получается путем вычисления побитового исключающего ИЛИ (⊕) соседних значений в исходном двоичном массиве длины n. В частности, для каждого индекса i в диапазоне [0, n – 1]: Если i = n - 1, то производный[i] = исходный[i] ⊕ исходный[0]. В противном случае производное[i] = исходное[i] ⊕ исходное[i + 1]. Учитывая производный массив, ваша задача — определить, существует ли допустимый исходный двоичный массив, который мог бы быть производным. Возвращайте true, если такой массив существует, или false в противном случае. Бинарный массив — это массив, содержащий только 0 и 1.
*/

function doesValidArrayExist(derived: number[]): boolean {
    const n = derived.length;

    const isValid = (start: number): boolean => {
        const original = new Array(n);
        original[0] = start;

        for (let i = 1; i < n; i++) {
            original[i] = derived[i - 1] ^ original[i - 1];
        }

        return (original[n - 1] ^ original[0]) === derived[n - 1];
    };

    return isValid(0) || isValid(1);
}
