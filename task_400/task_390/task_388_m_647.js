// Дана строка s, верните количество палиндромных подстрок в ней.
// Строка является палиндромом, если она читается как в прямом, 
// так и в обратном направлении.
// Подстрока — это непрерывная последовательность символов внутри строки.
// 647


s = "aaa"

var countSubstrings = function (s) {
    let length = s.length, answer = 0
    for (let i = 0; i < length; i++) {
        let j = i - 1, k = i
        while (k < length - 1 && s[k] === s[k + 1]) k++
        answer += (k - j) * (k - j + 1) / 2, i = k++
        while (~j && k < length && s[k] === s[j]) j--, k++, answer++
    }
    return answer
};

console.log(countSubstrings(s))