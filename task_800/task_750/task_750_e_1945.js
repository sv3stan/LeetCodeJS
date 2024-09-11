/**
Вам дана строка s, состоящая из строчных английских букв и целого числа k.
Сначала преобразуйте s в целое число, заменив каждую букву ее позицией в алфавите (т. е. замените «a» на 1, «b» на 2, ..., «z» на 26). Затем преобразуйте целое число, заменив его суммой его цифр. Всего повторите операцию преобразования k раз.
Например, если s = «zbax» и k = 2, то полученное целое число будет равно 8 в результате следующих операций:
Преобразовать: «zbax» ➝ «(26)(2)(1)(24)» ➝ «262124» ➝ 262124
Преобразование №1: 262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17.
Преобразование №2: 17 ➝ 1 + 7 ➝ 8
Верните полученное целое число после выполнения операций, описанных выше.
 */
let s = 'iiii';
let k = 2;

let getLucky = function (s, k) {
    let asciiSum = '';

    for (let i = 0; i < s.length; i++) {
        asciiSum += s[i].charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    }

    console.log(asciiSum);

    for (let j = 0; j < k; j++) {
        let sumDigits = 0;
        for (let i = 0; i < asciiSum.length; i++) {
            sumDigits += parseInt(asciiSum[i]);
        }

        asciiSum = sumDigits.toString();

        console.log('🚀 ~ getLucky ~ asciiSum:', asciiSum);

        console.log(sumDigits);
        console.log(asciiSum);
    }

    return asciiSum;
};

console.log(getLucky(s, k));
