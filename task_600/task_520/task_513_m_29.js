// Учитывая два целых числа: делимое и делитель, разделите два целых числа, 
// не используя операторы умножения, деления и модификатора.
// Целочисленное деление должно сокращаться до нуля, что означает потерю дробной части.
// Например, 8,345 будет сокращено до 8, а - 2,7335 будет сокращено до - 2.
// Возвращает частное после деления делимого на делитель.
// Примечание.Предположим, мы имеем дело со средой, 
// которая может хранить целые числа только в пределах 32 - битного целого 
// диапазона со знаком: [−231, 231 − 1].В этой задаче, если частное строго 
// больше 231 – 1, верните 231 – 1, а если частное строго меньше - 231, верните - 231.

// 29


//let dividend = -23, divisor = 1;
let dividend = -2147483648, divisor = -2147483648;
//let dividend = 2147483647, divisor = 2;

var divide = function (dividend, divisor) {
    if (dividend === -2147483648 && divisor === -1) return 2147483647

    let answer = 0;

    const sign = Math.sign(divisor) !== Math.sign(dividend);
    console.log(sign)
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    for (let i = 0, val = divisor; dividend >= divisor; i = 0, val = divisor) {
        while (val > 0 && val <= dividend) {
            val = divisor << ++i
        }
        dividend -= divisor << i - 1;
        answer += 1 << i - 1
    }

    return sign ? -answer : answer
};

console.log(divide(dividend, divisor))

// let sign = 1;

// if (dividend < 0) {
//     dividend = -dividend;
//     sign = -sign
// }
// if (divisor < 0) {
//     divisor = -divisor;
//     sign = -sign;
// }

// if (dividend === divisor) {
//     return sign
// }

// const max = 2147483648;
// const min = -2147483648;

// const checkSign = Math.sign(divisor) !== Math.sign(dividend);

// let count = 0;
// let divid = Math.abs(dividend)
// let divis = Math.abs(divisor)

// while (divid >= divis) {
//     divid -= divis;
//     count++;
// }


// console.log(count)
// if (count >= max) {
//     count = max - 1;
// }

// if (count <= min) {
//     count = min + 1;
// }

// if (checkSign) {
//     count = 0 - count;
// }
// return count;
