// Римские цифры представлены семью различными символами: I, V, X, L, C, D и M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// Например, 2 записывается как II римскими цифрами, состоящими из двух единиц. 
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
// Дана римская цифра, преобразуйте ее в целое число.
// 13

s = "MCMXCIV" // 1994
s = "LVIII"

var romanToInt = function (s) {

    let answer = 0;

    const hashSingleValue = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    const hashdoubleValue = new Map([
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900]
    ]);


    for (let i = 0; i < s.length; i++) {
        if (hashdoubleValue.has(s[i] + s[i + 1])) {
            answer += hashdoubleValue.get(s[i] + s[i + 1]);
            i++;
        } else {
            answer += hashSingleValue.get(s[i]) || 0;
        }
    }

    return answer;

    // for (let i = 0; i < s.length; i++) {
    //     console.log('-----------')
    //     if (s[i] === 'V' || s[i] === 'X' || s[i] === 'L' || s[i] === 'C' || s[i] === 'D' || s[i] === 'M') {
    //         console.log('+++++++++++++++++')
    //         if (hashdoubleValue.has(s[i] + s[i + 1])) {
    //             console.log('&&&&&&&&&&&&&&&&&')
    //             answer += hashdoubleValue.get(s[i] + s[i + 1])
    //             console.log(answer)
    //             i++
    //         } else {
    //             console.log(s[i])
    //             if (hashSingleValue.has(s[i])) {
    //                 console.log('??????????????')
    //                 answer += hashSingleValue.get(s[i])
    //                 console.log(answer)
    //             }
    //         }
    //     }
    // }

};


console.log(romanToInt(s)) 