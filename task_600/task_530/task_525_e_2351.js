// Дана строка s, состоящая из строчных английских букв, 
// верните первую букву, которая встретится дважды.
// 2351

s = "abccbaacz"
s = "abcdd"

var repeatedCharacter = function (s) {

    const hash = new Map()
    for (let i = 0; i < s.length; i++) {
        hash.set(s[i], (hash.get(s[i]) || 0) + 1);
        if (hash.get(s[i]) > 1) {
            return s[i];
        }
    }

};


console.log(repeatedCharacter(s))