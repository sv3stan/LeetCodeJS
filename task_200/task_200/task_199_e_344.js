// Напишите функцию, которая переворачивает строку.Входная строка задается как массив символов s.
// Вы должны сделать это, изменив входной массив на месте с дополнительной памятью O(1).
// 344

s = ["h", "e", "l", "l", "o"]

var reverseString = function (s) {


    const length = s.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = s.splice(i, 1)[0];
        s.slice(-1 - i, 1, temp)
        console.log(temp)
    }
    return s;


};

console.log(reverseString(s))














    //return s.reverse();


    // const length = s.length;
    // for (let i = 0; i < Math.floor(length / 2); i++) {
    //     const temp = s[i];
    //     s[i] = s[length - 1 - i];
    //     s[length - 1 - i] = temp;
    // }
    // return s.join('');