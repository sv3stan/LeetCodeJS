/**
Учитывая строковое выражение, представляющее выражение сложения и вычитания дробей, верните результат вычисления в строковом формате.
Конечным результатом должна быть несократимая дробь. Если конечный результат — целое число, измените его на формат дроби со знаменателем 1. Таким образом, в этом случае 2 следует преобразовать в 2/1.
 */

let expression = '-1/2+1/2+1/3';

let fractionAddition = function (expression) {
    let numerator = 0;
    let denominator = 1;

    function GCD(a, b) {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    let i = 0;
    while (i < expression.length) {
        let currNum = 0;
        let currDenominator = 0;

        let negative = false;

        if (expression[i] === '-' || expression[i] === '+') {
            if (expression[i] === '-') {
                negative = true;
            }
            i++;
        }

        while (i < expression.length && /\d/.test(expression[i])) {
            currNum = currNum * 10 + (expression[i] - '0');
            i++;
        }

        if (negative) currNum *= -1;

        i++;

        while (i < expression.length && /\d/.test(expression[i])) {
            currDenominator = currDenominator * 10 + (expression[i] - '0');
            i++;
        }

        numerator = numerator * currDenominator + currNum * denominator;
        denominator = denominator * currDenominator;
    }

    let gcd = GCD(Math.abs(numerator), denominator);

    numerator /= gcd;
    denominator /= gcd;

    return `${numerator}/${denominator}`;
};

console.log(fractionAddition(expression));
