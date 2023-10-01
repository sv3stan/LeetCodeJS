// Учитывая закодированную строку, верните ее декодированную строку.
// Правило кодирования: k[encoded_string], где закодированная_строка внутри квадратных скобок повторяется ровно k раз.
// Обратите внимание, что k гарантированно будет положительным целым числом.
// Вы можете предположить, что входная строка всегда действительна; нет лишних пробелов, квадратные скобки имеют правильную форму и т.д.
// Кроме того, вы можете предположить, что исходные данные не содержат никаких цифр и 
// что цифры предназначены только для повторяющихся чисел k.Например, не будет ввода типа 3a или 2[4].
// Тестовые примеры генерируются таким образом, что длина вывода никогда не превышает 105.
// 394

s = "3[a]2[bc]" //"aaabcbc"
s = "11[a2[cd]]"  //"accaccacc"
//s = "2[abc]3[cd]ef" //"abcabccdcdcdef"
//s = '3a';

var decodeString = function (s) {
    const stack = [];
    let nums = 0;
    let letters = '';

    for (let char of s) {
        if (char >= '0' && char <= '9') {
            nums = nums * 10 + parseInt(char); // Обрабатываем многозначные числа
        } else if (char === '[') {
            stack.push(letters);
            stack.push(nums);
            letters = '';
            nums = 0;
        } else if (char === ']') {
            const num = stack.pop();
            const prevStr = stack.pop();
            letters = prevStr + letters.repeat(num);
        } else {
            letters += char;
        }
    }

    return letters;

};

console.log(decodeString(s))