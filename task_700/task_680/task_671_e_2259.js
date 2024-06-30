/*
Вам задан строковый номер, представляющий целое положительное число и цифру символа.
Верните результирующую строку после удаления ровно одного вхождения цифры из числа так, чтобы значение результирующей строки в десятичной форме было максимальным. Тестовые случаи генерируются таким образом, что цифра встречается в числе хотя бы один раз.
*/
let number = '1231';
let digit = '1';

let removeDigit = function (number, digit) {
    let max = '';

    for (let i = 0; i < number.length; i++) {
        if (number[i] === digit) {
            let newNumber = number.slice(0, i) + number.slice(i + 1);
            if (max === '' || BigInt(newNumber) > BigInt(max)) {
                max = newNumber;
            }
        }
    }
    return max;
};

console.log(removeDigit(number, digit));
