/*
Вам дана строка s, состоящая из строчных английских букв и скобок.
Поменяйте местами строки в каждой паре совпадающих круглых скобок, начиная с самой внутренней.
Ваш результат не должен содержать скобок.
*/

let s = '(ed(et(oc))el)';

let reversebrackets = function (s) {
    const len = s.length;
    const brackets = [];
    const pair = new Array(len);
    let result = '';

    for (let i = 0; i < len; ++i) {
        if (s[i] === '(') {
            brackets.push(i);
        }
        if (s[i] === ')') {
            const j = brackets.pop();
            pair[i] = j;
            pair[j] = i;
        }
    }

    for (let index = 0, direction = 1; index < len; index += direction) {
        if (s[index] === '(' || s[index] === ')') {
            index = pair[index];
            direction = -direction;
        } else {
            result += s[index];
        }
    }
    return result;
};

console.log(reversebrackets(s));

// const stack = [];

// const char = s.split('');
// for (let i = 0; i < char.length; i++) {
//     if (char[i] === '(') {
//         stack.push(i);
//     }
// }
// console.log('🚀 ~ reversebrackets ~ stack:', stack);

// while (stack.length > 0) {
//     for (let i = 0; i < char.length; i++) {
//         if (char[i] === ')') {
//             const start = stack.pop();
//             const end = i;
//             const temp = char.slice(start + 1, end).reverse();

//             console.log('🚀 ~ reversebrackets ~ temp:', temp);

//             char.splice(start, end - start + 1, ...temp);

//             console.log('🚀 ~ reversebrackets ~ stack:', stack);
//         }
//     }
// }

// console.log('🚀 ~ reversebrackets ~ char:', char);
// return char.join('');
