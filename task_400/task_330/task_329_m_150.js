// Вам дан массив строковых токенов, который представляет 
// арифметическое выражение в обратной польской нотации.
// Оцените выражение.Возвращает целое число, представляющее значение выражения.
// Обратите внимание, что:
// Допустимые операторы: «+», «-», «*» и «/».
// Каждый операнд может быть целым числом или другим выражением.
// Деление между двумя целыми числами всегда сокращается до нуля.
// Никакого деления на ноль не будет.
// Входные данные представляют собой допустимое арифметическое 
// выражение в обратной польской записи.
// Ответ и все промежуточные вычисления можно представить в виде 32 - битного целого числа.
// 150



tokens = ["2", "1", "+", "3", "*"]
tokens = ["4", "13", "5", "/", "+"]
tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

var evalRPN = function (tokens) {

    const stack = [];
    let a = 0;
    let b = 0;

    for (let i = 0; i < tokens.length; i++) {

        while (/['0-9']/.test(tokens[i])) {
            stack.push(parseInt(tokens[i]))
            i++
        }
        console.log(stack)
        if (tokens[i] === '+') {
            stack.push(stack.pop() + stack.pop());
        } else {
            if (tokens[i] === '*') {
                stack.push(stack.pop() * stack.pop());
            } else {
                if (tokens[i] === '-') {
                    b = stack.pop();
                    a = stack.pop();
                    stack.push(parseInt(a - b));
                } else {
                    if (tokens[i] === '/') {
                        b = stack.pop();
                        a = stack.pop();
                        stack.push(parseInt(a / b));
                    }
                };

            }
        }
        console.log(stack)
    }

    return stack[stack.length - 1]
}
console.log(evalRPN(tokens))