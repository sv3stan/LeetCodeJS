// Дана строка s, состоящая из '(', ')' и строчных английских символов.
// Ваша задача — удалить минимальное количество круглых скобок
// («(» или «)» в любых позициях), чтобы полученная строка в круглых 
// скобках была допустимой, и вернуть любую допустимую строку.
// Формально строка в круглых скобках действительна тогда и только тогда, 
// когда:
// Это пустая строка, содержащая только символы нижнего регистра или
// Его можно записать как AB(A, объединенное с B), где A и B — допустимые строки, или
// Его можно записать как(A), где A — допустимая строка.

// 1249


s = "aa))b(c)d"

s = "lee(t(c)o)de)"

s = "))(("

var minRemoveToMakeValid = function (s) {



    const arr = s.split("")
    const len = arr.length
    const stack = [];
    for (let i = 0, char = arr[0]; i < len; char = arr[++i]) {

        if (char === ")")
            if (stack.length) {
                stack.pop()
            }
            else {
                delete arr[i]
            } else if (char === "(") {
                stack.push(i)
            }
        console.log(stack)
    }
    console.log(stack.length)
    console.log(arr)
    for (let i = 0; i < stack.length; i++) {
        console.log(i)
        delete arr[stack[i]]
    }
    console.log(arr)
    return arr.join("")

};

console.log(minRemoveToMakeValid(s))











// const stack = [];
// const answer = [];

// for (let i = 0; i < s.length; i++) {
//     if (s[i] === '(') {
//         stack.push(i);
//     } else if (s[i] === ')') {
//         if (stack.length !== 0 && s[stack[stack.length - 1]] === '(') {
//             stack.pop();
//         } else {
//             stack.push(i);
//         }
//     }
// }


// for (let i = 0; i < s.length; i++) {
//     if (!stack.includes(i)) {
//         answer.push(s[i]);
//     }
// }

// return answer.join('');
