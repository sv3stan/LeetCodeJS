// Для заданной строки s, состоящей из слов и пробелов, 
// вернуть длину последнего слова в строке.
// Слово – это максимальное подстрока
// состоящая только из не пробельных символов.
//58

//let s = "luffy is still    joyboy";

//let s = "   fly me   to   the moon  ";
let s = "   Hello World";

function lengthOfLastWord(s) {
    let lengthWord = 0;
    let i = s.length - 1;
    while (i >= 0) {
        if (s[i] != ' ') {
            lengthWord++;
        }
        if (lengthWord != 0 && i < s.length && s[i] == ' ') {
            return lengthWord;
        }
        i--;
    }
    return lengthWord;
};

console.log(lengthOfLastWord(s));