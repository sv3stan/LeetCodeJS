/*
Учитывая слова массива строк, верните массив всех символов, которые встречаются во всех строках в словах (включая дубликаты). Вы можете вернуть ответ в любом порядке.
*/

let words = ['bella', 'label', 'roller'];

let commonChars = function (words) {
    if (words.length === 0) return [];

    const hash = {};
    for (const char of words[0]) {
        hash[char] = (hash[char] || 0) + 1;
    }

    for (let i = 1; i < words.length; i++) {
        const word = words[i];
        const temp = {};
        for (const char of word) {
            if (hash[char]) {
                temp[char] = (temp[char] || 0) + 1;
            }
        }

        for (const char in hash) {
            if (temp[char]) {
                hash[char] = Math.min(hash[char], temp[char]);
            } else {
                delete hash[char];
            }
        }
    }

    // Формирование результата
    const res = [];
    for (const char in hash) {
        for (let i = 0; i < hash[char]; i++) {
            res.push(char);
        }
    }

    return res;
};

console.log(commonChars(words));
