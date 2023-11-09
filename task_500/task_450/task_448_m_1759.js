// Учитывая строку s, верните количество однородных подстрок строки s.
// Поскольку ответ может быть слишком большим, верните его по модулю 109 + 7.
// Строка является однородной, если все символы строки одинаковы.
// Подстрока — это непрерывная последовательность символов внутри строки.
// 1759

s = "abbcccaa"

s = "zzzzz"
var countHomogenous = function (s) {

    let answer = 0;
    let count = 0;
    const MOD = 1000 * 1000 * 1000 + 7;

    for (let i = 0; i < s.length; i++) {
        (i === 0 || s[i] === s[i - 1]) ? count++ : count = 1
        answer = (answer + count) % MOD;
    }

    return answer;

};


console.log(countHomogenous(s))