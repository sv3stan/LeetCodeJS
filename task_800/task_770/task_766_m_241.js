/**
Учитывая строковое выражение чисел и операторов, верните все возможные результаты вычисления всех возможных способов группировки чисел и операторов. Вы можете вернуть ответ в любом порядке.
Тестовые случаи генерируются таким образом, чтобы выходные значения укладывались в 32-битное целое число, а количество различных результатов не превышало 104.
 */

let expression = '2*3-4*5';

let diffWaysToCompute = function (expression) {
    const hash = new Map();

    function helper(expr) {
        if (hash.has(expr)) {
            return hash.get(expr);
        }
        const answer = [];
        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];
            if (char === '+' || char === '-' || char === '*') {
                const left = helper(expr.slice(0, i));
                const right = helper(expr.slice(i + 1));
                for (const l of left) {
                    for (const r of right) {
                        if (char === '+') answer.push(l + r);
                        else if (char === '-') answer.push(l - r);
                        else if (char === '*') answer.push(l * r);
                    }
                }
            }
        }
        if (answer.length === 0) {
            answer.push(Number(expr));
        }
        hash.set(expr, answer);
        return answer;
    }

    return helper(expression);
};

console.log(diffWaysToCompute(expression));
