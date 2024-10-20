/**
Логическое выражение — это выражение, которое имеет значение true или false. Он может иметь одну из следующих форм:
't', который оценивается как true.
'f', который оценивается как ложь.
'!(subExpr)', результатом которого является логическое НЕ внутреннего выражения subExpr.
'&(subExpr1, subExpr2, ..., subExprn)', который оценивается как логическое И внутренних выражений subExpr1, subExpr2, ..., subExprn, где n >= 1.
'|(subExpr1, subExpr2, ..., subExprn)', который оценивается как логическое ИЛИ внутренних выражений subExpr1, subExpr2, ..., subExprn, где n >= 1.
Учитывая строковое выражение, представляющее логическое выражение, верните оценку этого выражения.
Гарантируется, что данное выражение допустимо и соответствует заданным правилам.
 */

function parseBoolExpr(expression: string): boolean {
    // Функция для применения логической операции к массиву булевых значений
    const applyOperator = (operator, values) => {
        if (operator === '&') {
            return values.every(val => val === true); // Логическое AND
        } else if (operator === '|') {
            return values.some(val => val === true); // Логическое OR
        } else if (operator === '!') {
            return !values[0]; // Логическое NOT, принимает только одно значение
        }
    };

    const stack = []; // Стек для хранения операторов и значений
    for (let char of expression) {
        if (char === '(' || char === '!' || char === '&' || char === '|') {
            // Открывающая скобка или оператор добавляются в стек
            stack.push(char);
        } else if (char === 't' || char === 'f') {
            // Преобразование символов 't' и 'f' в true и false
            stack.push(char === 't');
        } else if (char === ')') {
            // Когда встречаем закрывающую скобку, извлекаем подвыражение из стека
            let values = [];
            while (stack[stack.length - 1] !== '(') {
                values.push(stack.pop());
            }
            stack.pop(); // Удаляем открывающую скобку '('

            const operator = stack.pop(); // Извлекаем оператор ('!', '&', '|')
            stack.push(applyOperator(operator, values.reverse())); // Применяем оператор и кладем результат в стек
        }
    }

    // В конце в стеке останется одно булево значение
    return stack.pop();
}
