// Учитывая n пар круглых скобок, напишите функцию, 
// которая генерирует все комбинации правильных круглых скобок.
// 22

n = 3;


var generateParenthesis = function (n) {
    const result = [];

    function generate(current, open, close) {
        console.log(current)
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        if (open < n) {
            generate(current + '(', open + 1, close);
        }

        if (close < open) {
            generate(current + ')', open, close + 1);
        }
    }

    generate('', 0, 0);
    return result;
};


console.log(generateParenthesis(n))