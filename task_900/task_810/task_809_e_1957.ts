/**
Причудливая строка — это строка, в которой нет трех последовательных символов, равных.
Учитывая строку s, удалите минимально возможное количество символов из s, чтобы сделать ее более интересной.
Верните последнюю строку после удаления. Можно показать, что ответ всегда будет единственным.
 */

let s = 'leeetcode';

function makeFancyString(s: string): string {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (
            stack.length >= 2 &&
            stack[stack.length - 1] === stack[stack.length - 2] &&
            stack[stack.length - 1] === s[i]
        )
            continue;
        stack.push(s[i]);
    }
    return stack.join('');
}

console.log(makeFancyString(s));
