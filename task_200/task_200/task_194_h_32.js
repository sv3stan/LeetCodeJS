// Учитывая строку, содержащую только символы '(' и ')', 
// верните длину самых длинных допустимых(правильно сформированных) круглых скобок.
// 32

s = ")()())";
//s = ')(()((())())()))()'
// s = ')(()())))((())())()()()'
//s = ')())()())))()()()'
//s = "(()"
//s = "()(((()())"
var longestValidParentheses = function (s) {

    const stack = [];
    stack[0] = -1;
    let answer = 0;
    let currentCount = 0;

    for (let i = 0; i < s.length; i++) {
        console.log(' --------  ')


        if (s[i] === '(') {
            stack.push(i);
        }

        if (s[i] === ')') {
            if (stack.length === 0) {
                stack.push(i);
            } else {
                stack.pop();
                if (stack.length === 0) {
                    stack.push(i);
                } else {
                    currentCount = i - stack[stack.length - 1];
                    answer = Math.max(answer, currentCount);
                }
            }
        }
        //if (stack.length === 0) 

        answer = Math.max(answer, currentCount);

        console.log(stack)

        console.log(currentCount + ' - currentCount- ' + answer + ' - answer - ');
        console.log(stack.length + ' - stack.length - ')
    }

    return answer;
};

console.log(longestValidParentheses(s))