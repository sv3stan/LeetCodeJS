// Вам дано большое целое число, представленное в виде целочисленного массива цифр,
// где каждая цифра[i] — это i - я цифра целого числа.Цифры упорядочены от наиболее
// значащего к наименее значащему в порядке слева направо.Большое целое число не содержит ведущих нулей.
// Увеличьте большое целое число на единицу и верните результирующий массив цифр
//66


let digits = [9]

function plusOne(digits) {
    let sum = [];
    let carryOver = true;
    for (let item = digits.length - 1; item >= 0; item--) {
        if (carryOver) {
            if (digits[item] === 9) {
                carryOver = true;
                sum.unshift(0);
            } else {
                carryOver = false;
                sum.unshift(digits[item] + 1);
            }
        } else {
            carryOver = false;
            sum.unshift(digits[item]);
        }
    }

    if (carryOver) sum.unshift(1);
    return sum;
}

console.log(plusOne(digits));
