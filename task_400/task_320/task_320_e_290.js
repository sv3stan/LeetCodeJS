// Учитывая шаблон и строку s, определите, соответствует ли s тому же шаблону.
// Здесь следовать означает полное совпадение, такое, 
// что существует биекция между буквой в образце и непустым словом в s.
// 290

pattern = "abba", s = "dog cat cat dog"
//pattern = "abba", s = "dog cat cat fish"
//pattern = "aaaa", s = "dog cat cat dog"
//pattern = "abba", s = "dog dog dog dog"
//pattern = "aaa", s = "aa aa aa aa"
pattern = "jquery", s = "jquery"
var wordPattern = function (pattern, s) {

    if (pattern.length !== s.split(' ').length) {
        return false; // Проверка длины строк
    }

    const hashTable = new Map();
    const words = s.split(' ');

    for (let i = 0; i < pattern.length; i++) {
        const ch = pattern[i];
        const word = words[i];

        if (!hashTable.has(ch)) {
            for (const value of hashTable.values()) {
                if (value === word) {
                    return false; // Повторное использование слова
                }
            }
            hashTable.set(ch, word);
        } else {
            if (hashTable.get(ch) !== word) {
                return false; // Несоответствие маппинга
            }
        }
    }

    return true;

};


console.log(wordPattern(pattern, s))