/**
Дополнение целого числа — это целое число, которое вы получаете, если перевернуть все 0 на 1 и все 1 на 0 в его двоичном представлении.
Например, целое число 5 — это «101» в двоичном формате, а его дополнение — «010», которое представляет собой целое число 2.
Учитывая целое число, верните его дополнение.
 */
let num = 5;

let findComplement = function (num) {
    const bin = num.toString(2);
    let inversionBin = '';

    for (let i = 0; i < bin.length; i++) {
        inversionBin += bin[i] === '0' ? '1' : '0';
    }

    return parseInt(inversionBin, 2);
};

console.log(findComplement(num));
