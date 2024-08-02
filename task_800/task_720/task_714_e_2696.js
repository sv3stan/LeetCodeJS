/**
Вам дана строка s, состоящая только из заглавных английских букв.
Вы можете применить к этой строке некоторые операции, в одной из которых вы можете удалить из s любое вхождение одной из подстрок "AB" или "CD".
Верните минимально возможную длину результирующей строки, которую вы можете получить.
Обратите внимание, что после удаления подстроки строка конкатенируется и могут появиться новые подстроки "AB" или "CD".
 */

s = 'ABFCACDB';

let minLength = function (s) {
    // const chars = s.split('');
    // let i = 0;
    // while (i < chars.length) {
    //     if (chars[i] === 'A' && chars[i + 1] === 'B') {
    //         chars.splice(i, 2);
    //         i = 0;
    //     } else if (chars[i] === 'C' && chars[i + 1] === 'D') {
    //         chars.splice(i, 2);
    //         i = 0;
    //     } else {
    //         i++;
    //     }
    // }
    // return chars.length;

    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A' && s[i + 1] === 'B') {
            i++;
        } else if (s[i] === 'C' && s[i + 1] === 'D') {
            i++;
        } else {
            stack.push(s[i]);
        }

    
};

console.log(minLength(s)); // Output: 6

// Test case 2

s = 'CDCDCD';

console.log(minLength(s)); // Output: 0

// Test case 3

s = 'ABABAB';

console.log(minLength(s)); // Output: 0

// Test case 4

s = 'ABCDCDCD';

console.log(minLength(s)); // Output: 1

// Test case 5
