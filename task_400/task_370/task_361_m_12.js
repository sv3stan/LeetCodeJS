// Римские цифры представлены семью различными символами: I, V, X, L, C, D и M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// Например, 2 записывается как II римскими цифрами, просто складываются две единицы. 
// 12 записывается как XII, то есть просто X + II.
// Число 27 записывается как XXVII, то есть XX + V + II.
// Римские цифры обычно пишутся от большей к меньшей слева направо.
// Однако цифра четыре не IIII.Вместо этого цифра четыре записывается как IV.
// Поскольку единица стоит перед пятеркой, мы вычитаем ее, получая четыре.
// Тот же принцип применим и к числу девять, которое пишется как IX.
// Есть шесть случаев, когда используется вычитание:
// I можно поставить перед V(5) и X(10), чтобы получилось 4 и 9.
// X можно поставить перед L(50) и C(100), чтобы получилось 40 и 90.
// C можно поставить перед D(500) и M(1000), чтобы получилось 400 и 900.
// Учитывая целое число, преобразуйте его в римскую цифру.

// 12

num = 94;

var intToRoman = function (num) {
    let answer = '';
    const hashUnit = new Map([
        [0, ''],
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [7, 'VII'],
        [8, 'VIII'],
        [9, 'IX'],
        [10, 'X'],

    ]);
    const hashTen = new Map([
        [0, ''],
        [1, 'X'],
        [2, 'XX'],
        [3, 'XXX'],
        [4, 'XL'],
        [5, 'L'],
        [6, 'LX'],
        [7, 'LXX'],
        [8, 'LXXX'],
        [9, 'XC'],
    ]);

    const hashHundreds = new Map([
        [0, ''],
        [1, 'C'],
        [2, 'CC'],
        [3, 'CCC'],
        [4, 'CD'],
        [5, 'D'],
        [6, 'DC'],
        [7, 'DCC'],
        [8, 'DCCC'],
        [9, 'CM'],
    ]);

    const hashThousands = new Map([
        [0, ''],
        [1, 'M'],
        [2, 'MM'],
        [3, 'MMM']
    ]);

    // const digits = [1000, 100, 10, 1]

    // let thousands = Math.floor(num / 1000);
    // let hundreds = Math.floor((num % 1000) / 100);
    // let tens = Math.floor(((num % 1000) % 100) / 10);
    // let ones = Math.floor(num % 10);
    // console.log(thousands)
    // console.log(Math.floor((num % 1000) / 100))
    // console.log(Math.floor(((num % 1000) % 100) / 10))
    // console.log(Math.floor(num % 10))

    answer += hashThousands.get(Math.floor(num / 1000))
        + hashHundreds.get(Math.floor((num % 1000) / 100))
        + hashTen.get(Math.floor(((num % 1000) % 100) / 10))
        + hashUnit.get(Math.floor(num % 10));

    return answer;
};

console.log(intToRoman(num))
