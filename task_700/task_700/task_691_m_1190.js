/*
Вам дана строка s, состоящая из строчных английских букв и скобок.
Поменяйте местами строки в каждой паре совпадающих круглых скобок, начиная с самой внутренней.
Ваш результат не должен содержать скобок.
*/

let s = 'f(ul)ao(t(y)qbn)()sj';

let reverseParentheses = function (s) {
    const stack = [];
    const char = s.split('');

    for (let i = 0; i < char.length; i++) {
        if (char[i] === '(') {
            stack.push(i);
        } else if (char[i] === ')') {
            const start = stack.pop();
            const end = i;
            // Reverse the substring within the parentheses
            const temp = char.slice(start + 1, end).reverse();
            // Replace the original substring with the reversed one
            char.splice(start, end - start + 1, ...temp);
        }
    }

    // Join the array into a string and remove any remaining parentheses
    return char.filter(c => c !== '(' && c !== ')').join('');
};

console.log(reverseParentheses(s));
