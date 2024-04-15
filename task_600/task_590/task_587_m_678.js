﻿// Учитывая строку s, содержащую только три типа 
// символов: '(', ')' и '*', верните true, если s допустимо.
// Следующие правила определяют допустимую строку:
// Любая левая скобка '(' должна иметь соответствующую правую скобку ')'.
// Любая правая скобка ')' должна иметь соответствующую левую скобку '('.
// Левая скобка '(' должна стоять перед соответствующей правой скобкой ')'.
// '*' можно рассматривать как одну правую скобку ')' или одну левую скобку '(' или пустую строку "".


// 678

s = "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"

s = "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
// s = "()"
// s = "(*)"
// s = "(*)()"
s = "(((((*(()((((*((**(((()()*)()()()*((((**)())*)*)))))))(())(()))())((*()()(((()((()*(())*(()**)()(())"
var checkValidString = function (s) {

    const stack = []
    const asterics = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(i)
        } else if (s[i] == '*') {
            asterics.push(i)
        } else {
            if (stack.length) {
                stack.pop()
            }
            else if (asterics.length) {
                asterics.pop()
            }
            else {
                return false;
            }
        }
    }

    while (stack.length && asterics.length) {
        if (stack.pop() > asterics.pop()) {
            return false;
        }
    }
    return stack.length == 0
}
console.log(checkValidString(s))
