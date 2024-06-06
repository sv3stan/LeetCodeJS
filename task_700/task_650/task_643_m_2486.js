/*
Вам даны две строки s и t, состоящие только из строчных английских букв.
Возвращает минимальное количество символов, которые необходимо добавить в конец s, чтобы t стало подпоследовательностью s.
Подпоследовательность — это строка, которую можно получить из другой строки путем удаления некоторых символов или отсутствия их без изменения порядка оставшихся символов.
*/

let s = 'coaching';
let t = 'coding';
//(s = 'abcde'), (t = 'a');
//(s = 'z'), (t = 'abcde');
//(s = 'vrykt'), (t = 'rkge');
let appendCharacters = function (s, t) {
    let count = 0;
    let sPoint = 0;
    let tPoint = 0;
    while (sPoint < s.length) {
        if (s[sPoint] === t[tPoint]) {
            console.log(
                s[sPoint] + ' - s[sPoint] - ' + t[tPoint] + ' - t[tPoint] ',
            );
            count++;
            tPoint++;
            sPoint++;
        } else {
            sPoint++;
        }
        console.log(count);
    }

    return t.length - count;
};

console.log(appendCharacters(s, t));

// let count = 0;
// let sPoint = 0;
// let tPoint = 0;
// let maxPrefix = 0;
// while (sPoint < s.length) {
//     if (s[sPoint] === t[tPoint]) {
//         console.log(
//             s[sPoint] + ' - s[sPoint] - ' + t[tPoint] + ' - t[tPoint] ',
//         );
//         count++;
//         tPoint++;
//         sPoint++;
//     } else {
//         tPoint = 0;
//         sPoint++;
//         maxPrefix = Math.max(maxPrefix, count);
//         count = 0;
//     }
//     console.log(count);
// }
// maxPrefix = Math.max(maxPrefix, count);
// console.log(maxPrefix);
// return t.length - maxPrefix;
