/**
Вам дан массив строк words с индексом 0 и символ x.
Верните массив индексов, представляющих слова, содержащие символ x.
Обратите внимание, что возвращаемый массив может быть расположен в любом порядке.
 */

let words = ['abc', 'bcd', 'aaaa', 'cbc'];
let x = 'a';
let findWordsContaining = function (words, x) {
    const arr = [];
    words.forEach((str, index) => {
        if (str.includes(x)) {
            arr.push(index);
        }
    });
    return arr;
};

console.log(findWordsContaining(words, x));
