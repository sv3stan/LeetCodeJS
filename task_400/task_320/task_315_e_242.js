// Учитывая две строки s и t, верните true, 
// если t является анаграммой s, и false в противном случае.
// Анаграмма — это слово или фраза, образованная перестановкой 
// букв другого слова или фразы, 
// обычно с использованием всех исходных букв ровно один раз.
// 242

s = "anagram", t = "nagaram"
//s = "rat", t = "car"

var isAnagram = function (s, t) {

    if (s.length !== t.length) return false;

    const hashTable = new Map();

    for (let i = 0; i < s.length; i++) hashTable.set(s[i], (hashTable.get(s[i]) || 0) + 1);

    console.log(hashTable)
    for (let i = 0; i < t.length; i++) {

        if (hashTable.has(t[i])) hashTable.set(t[i], hashTable.get(t[i]) - 1);
        if (hashTable.get(t[i]) === 0) hashTable.delete(t[i])

    }

    console.log(hashTable)
    return hashTable.size === 0;


};

console.log(isAnagram(s, t))