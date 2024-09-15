/**
Вам дана строка, состоящая из отдельных символов и массива слов. Строка является согласованной, если все символы строки встречаются в разрешенной строке.
Возвращает количество согласованных строк в словах массива.
 */

let allowed = 'ab';
let words = ['ad', 'bd', 'aaab', 'baa', 'badab'];
let countConsistentStrings = function (allowed, words) {
    const hash = new Set(allowed);
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        words[i].split('').every(el => hash.has(el)) ? count++ : count;
    }
    return count;
};

console.log(countConsistentStrings(allowed, words));
