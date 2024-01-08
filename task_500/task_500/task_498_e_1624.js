// Учитывая строку s, верните длину самой длинной подстроки 
// между двумя одинаковыми символами, исключая эти два символа.
// Если такой подстроки нет, верните - 1.
// Подстрока — это непрерывная последовательность символов внутри строки.

// 1624

s = "abca"
s = "cbzxy"
s = "aa"
s = "abcadbeacd"
s = "mgntdygtxrvxjnwksqhxuxtrv"

var maxLengthBetweenEqualCharacters = function (s) {


    // const hash = Int16Array.from({ length: 26 }).fill(-1)

    // let max = -1;
    // const shift = 97;

    // for (let i = 0; i < s.length; i++) {

    //     const char = s.charCodeAt(i) - shift;
    //     console.log(char)

    //     if (hash[char] === -1) {
    //         hash[char] = i;
    //     }


    //     if (hash[char] > -1) {
    //         console.log('----------')
    //         max = Math.max(max, i - hash[char] - 1)
    //     }


    //     console.log(hash)
    //     console.log(max)
    // }

    // return max;

    let max = -1;
    for (let i = s.length - 1; i > 0; i--) {
        let index = s.indexOf(s[i]);
        console.log(index)
        max = Math.max(max, (i - index) - 1)
    }
    return max;


};

console.log(maxLengthBetweenEqualCharacters(s))