/*
Учитывая строковое слово с индексом 0 и символ ch, переверните сегмент слова, который начинается с индекса 0 и заканчивается индексом первого вхождения ch (включительно). Если символа ch не существует в слове, ничего не делайте.

Например, если word="abcdefd" и ch="d", то вам следует поменять местами сегмент, который начинается с 0 и заканчивается 3 (включительно). Результирующая строка будет «dcbaefd».
Верните полученную строку.
*/

let word = 'abvcdefd';
let ch = 'd';

let reversePrefix = function (word, ch) {
    let left = 0;
    let right = 0;
    let chars = [...word];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            right = i;
            break;
        }
    }

    while (left <= right) {
        const temp = chars[right];
        chars[right] = chars[left];
        chars[left] = temp;
        left++;
        right--;
    }

    return chars.join('');
};
// eslint-disable-next-line no-console
console.log(reversePrefix(word, ch));
