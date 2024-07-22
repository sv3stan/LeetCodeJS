/*
Вам дана строка s, состоящая из строчных английских букв и скобок.
Поменяйте местами строки в каждой паре совпадающих круглых скобок, начиная с самой внутренней.
Ваш результат не должен содержать скобок.
*/

let s = '(ed(et(oc))el)';

let reverseParentheses = function (s) {
    const stack = [];

    const char = s.split('');
    for (let i = 0; i < char.length; i++) {
        if (char[i] === '(') {
            stack.push(i);
        } else if (char[i] === ')') {
            const start = stack.pop();
            const end = i;
            const temp = char.slice(start + 1, end).reverse();

            console.log('🚀 ~ reverseParentheses ~ temp:', temp);

            char.splice(start, end - start + 1, ...temp);
            i = 0;
        }
        console.log('🚀 ~ reverseParentheses ~ stack:', stack);
    }
    return char.filter(c => c !== '(' && c !== ')').join('');
};

console.log(reverseParentheses(s));
