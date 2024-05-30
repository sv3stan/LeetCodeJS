/*
Вам даны две строки s и t одинаковой длины и целое число maxCost.
Вы хотите изменить s на t. Замена i-го символа s на i-й символ t стоит |s[i] - t[i]| (т. е. абсолютная разница между значениями ASCII символов).
Возвращает максимальную длину подстроки s, которую можно изменить так, чтобы она совпадала с соответствующей подстрокой t со стоимостью, меньшей или равной maxCost. Если нет подстроки из s, которую можно было бы заменить на соответствующую подстроку из t, верните 0.
*/

let s = 'abcd';
let t = 'bcdf';
let maxCost = 3;

// (s = 'abcd'), (t = 'cdef'), (maxCost = 3);

let equalSubstring = function (s, t, maxCost) {
    const sCharCodes = s.split('').map(char => char.charCodeAt(0));
    const tCharCodes = t.split('').map(char => char.charCodeAt(0));

    const difference = sCharCodes.map((code, index) =>
        Math.abs(code - tCharCodes[index]),
    );

    let left = 0;
    let right = 0;
    let sum = 0;
    let maxLength = 0;

    while (right < difference.length) {
        sum += difference[right];

        while (sum > maxCost) {
            sum -= difference[left];
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }

    return maxLength;
};

console.log(equalSubstring(s, t, maxCost));
