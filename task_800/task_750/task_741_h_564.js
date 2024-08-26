/**
Учитывая строку n, представляющую целое число, верните ближайшее целое число (не включая себя), которое является палиндромом. Если есть ничья, верните меньшую.

Ближайшее определяется как минимизированная абсолютная разница между двумя целыми числами.
 */

let n = '1213';

let nearestPalindromic = function (n) {
    let number = BigInt(n);
    if (number <= 10n) return (number - 1n).toString();
    if (number === 11n) return '9';

    let length = n.length;
    let left = BigInt(n.slice(0, (length + 1) / 2));

    let palindrome = [
        createPalindrome(left - 1n, length % 2 === 0),
        createPalindrome(left, length % 2 === 0),
        createPalindrome(left + 1n, length % 2 === 0),
        BigInt(10n ** BigInt(length - 1)) - 1n,
        BigInt(10n ** BigInt(length)) + 1n,
    ];

    let minPalindrom = 0n;
    let minDifference = BigInt(Number.MAX_SAFE_INTEGER);

    function createPalindrome(left, isEvenLength) {
        let palindrome = left;
        if (!isEvenLength) left = left / 10n;
        while (left > 0n) {
            palindrome = palindrome * 10n + (left % 10n);
            left = left / 10n;
        }
        return palindrome;
    }

    for (let candidate of palindrome) {
        if (candidate === number) continue;
        let diff = candidate > number ? candidate - number : number - candidate;
        if (
            diff < minDifference ||
            (diff === minDifference && candidate < minPalindrom)
        ) {
            minDifference = diff;
            minPalindrom = candidate;
        }
    }

    return minPalindrom.toString();
};

console.log(nearestPalindromic(n));

// let num = parseInt(n);
// let down = num - 1;
// let up = num + 1;

// while (isPalindrome(down) === false || isPalindrome(up) === false) {
//     isPalindrome(down) === false ? down-- : down;

//     isPalindrome(up) === false ? up++ : up;
// }

// console.log('🚀 ~ nearestPalindromic ~ down:', down);

// // while (isPalindrome(up) === false) {
// //     up++;
// // }

// console.log('🚀 ~ nearestPalindromic ~ up:', up);

// function isPalindrome(num) {
//     return num.toString() === num.toString().split('').reverse().join('');
// }

// const min = num - down;
// const max = up - num;

// if (min === max) {
//     return down.toString();
// } else if (min > max) {
//     return up.toString();
// } else {
//     return down.toString();
// }
