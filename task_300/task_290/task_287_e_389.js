// Вам даны две строки s и t.
// Строка t генерируется случайным перетасовкой строки s 
// с последующим добавлением еще одной буквы в случайную позицию.
// Верните букву, добавленную к t.
// 389

s = "abcd", t = "abcde"


var findTheDifference = function (s, t) {

    let sSum = 0;
    let tSum = 0;
    for (let i = 0; i < s.length; i++) {
        sSum += s.charCodeAt(i);
        tSum += t.charCodeAt(i);
    }

    tSum += t.charCodeAt(t.length - 1);

    return String.fromCharCode(tSum - sSum);

};


console.log(findTheDifference(s, t))

