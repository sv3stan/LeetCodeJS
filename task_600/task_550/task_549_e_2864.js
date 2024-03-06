// Вам дана двоичная строка s, содержащая хотя бы одну единицу.
// Вам необходимо переставить биты таким образом, чтобы полученное 
// двоичное число было максимальным нечетным двоичным числом, 
// которое можно создать из этой комбинации.
// Возвращает строку, представляющую максимальное нечетное двоичное число, 
// которое может быть создано из данной комбинации.
// Обратите внимание, что результирующая строка может иметь ведущие нули.


// 2864


s = "010101"
// s = "010000"

var maximumOddBinaryNumber = function (s) {


    let quantityOnes = 0;

    for (const char of s) {
        if (char === '1') {
            quantityOnes++
        }
    }

    let result = Array.from({ length: s.length }).fill('0');

    for (let i = 0; i < quantityOnes - 1; i++) {
        result[i] = '1';
    }

    result[result.length - 1] = '1';

    return result.join('');

};


console.log(maximumOddBinaryNumber(s))
 
