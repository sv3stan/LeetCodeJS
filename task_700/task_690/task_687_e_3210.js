/**
Вам дана строка s и целое число k. Зашифруйте строку, используя следующий алгоритм:
Для каждого символа c в s замените c на k-й символ после c в строке (циклически).
Верните зашифрованную строку.
*/

let s = 'abcdefghjk';
let k = 4;

let getEncryptedString = function (s, k) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        answer += s[(i + k) % s.length];
    }

    return answer;
};

console.log(getEncryptedString(s, k));
