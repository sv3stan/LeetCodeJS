/**
Вам даны два массива с целыми положительными числами arr1 и arr2.
Префикс положительного целого числа — это целое число, образованное одной или несколькими цифрами, начиная с самой левой цифры. Например, 123 является префиксом целого числа 12345, а 234 — нет.
Общим префиксом двух целых чисел a и b является целое число c, такое, что c является префиксом как для a, так и для b. Например, 5655359 и 56554 имеют общий префикс 565, а 1223 и 43456 не имеют общего префикса.
Вам нужно найти длину самого длинного общего префикса между всеми парами целых чисел (x, y), таких, что x принадлежит arr1, а y принадлежит arr2.
Возвращает длину самого длинного общего префикса среди всех пар. Если между ними не существует общего префикса, верните 0.
 */

let arr1 = [20];
let arr2 = [24];

let longestCommonPrefix = function (arr1, arr2) {
    const hash = new Set();
    let maxPrefix = 0;

    for (let val of arr1) {
        while (!hash.has(val) && val > 0) {
            hash.add(val);
            val = Math.floor(val / 10);
        }
    }

    for (let val of arr2) {
        let currentVal = val;
        while (!hash.has(currentVal) && currentVal > 0) {
            // hash.add(val);
            currentVal = Math.floor(currentVal / 10);
        }
        if (currentVal > 0) {
            maxPrefix = Math.max(
                maxPrefix,
                Math.floor(Math.log10(currentVal) + 1),
            );
        }
    }

    return maxPrefix;
};

console.log(longestCommonPrefix(arr1, arr2));
