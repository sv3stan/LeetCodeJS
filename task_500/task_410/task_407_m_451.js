// Дана строка s, отсортируйте ее в порядке убывания частоты 
// встречаемости символов.Частота символа — это количество раз, 
// которое он появляется в строке. Вернуть отсортированную строку.
// Если ответов несколько, верните любой из них.
// 451


s = "Aabb"

var frequencySort = function (s) {

    const hash = new Map();
    for (const char of s) hash.set(char, (hash.get(char) || 0) + 1);
    //const keys = hash.keys();
    const sorted = [...hash.keys()].sort((a, b) => hash.get(b) - hash.get(a));
    return sorted.reduce((acc, item) => acc += item.repeat(hash.get(item)), '')

};

console.log(frequencySort(s))