// Учитывая входную строку s, измените порядок слов на обратный.
// Слово определяется как последовательность символов, не являющихся пробелами.
// Слова в s будут разделены хотя бы одним пробелом.
// Возвращает строку слов в обратном порядке, объединенную одним пробелом.
// Обратите внимание, что s может содержать начальные или конечные пробелы или несколько пробелов между двумя словами.
// Возвращаемая строка должна содержать только один пробел, разделяющий слова.Не включайте лишних пробелов.
// 151

s = "the sky is      blue";
//s = "  hellos world  "

var reverseWords = function (s) {
    const modifiedString = s.split(' ').filter(word => word !== '').join(' ');
    let answer = '';
    const length = modifiedString.length - 1;
    let temp = '';
    for (let i = 0; i <= length; i++) {
        if (modifiedString[i] !== ' ') temp += modifiedString[i];
        if (modifiedString[i] === ' ' || i === length) {
            answer.length === 0 ? answer = temp : answer = temp + ' ' + answer;
            temp = '';
        }
    }
    return answer;
};

console.log(reverseWords(s))