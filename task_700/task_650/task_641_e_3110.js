/*
Вам дана строка s. Оценка строки определяется как сумма абсолютной разницы между значениями ASCII соседних символов.
Вернуть оценку s.
*/
let s = 'hello';

let scoreOfString = function (s) {
    let res = 0;

    for (let i = 1; i < s.length; i++) {
        res += Math.abs(s[i].charCodeAt() - s[i - 1].charCodeAt());
    }

    return res;
};

console.log(scoreOfString(s));
