// Учитывая строку s, содержащую только символы
// '(', ')', '{', '}', '[' и ']', определите, допустима ли входная строка.
// Входная строка действительна, если:
// Открытые скобки должны быть закрыты однотипными скобками.
// Открытые скобки должны быть закрыты в правильном порядке.
// Каждой закрывающей скобке соответствует открытая скобка того же типа.
// 20
//let s = '()[]{}';
let s = '({[[]]})';

function isValid(s) {
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const matchingBracket =
                openingBrackets[closingBrackets.indexOf(char)];
            if (stack.length === 0 || stack.pop() !== matchingBracket) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(isValid(s));
