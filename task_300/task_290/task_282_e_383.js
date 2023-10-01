// Учитывая две строки ransomNote и Magazine, верните true, 
// если ransomNote можно создать с использованием letters из magazine, 
// и false в противном случае.
// Каждую letter в magazine можно использовать в только один раз.
// 383


ransomNote = "aa", magazine = "aab"
ransomNote = "a", magazine = "b"
ransomNote = "aa", magazine = "ab"
var canConstruct = function (ransomNote, magazine) {

    const letters = new Map();
    for (let i = 0; i < magazine.length; i++) {
        letters.set(magazine[i], (letters.get(magazine[i]) || 0) + 1);
    }


    for (let i = 0; i < ransomNote.length; i++) {

        if (letters.has(ransomNote[i])) {
            letters.set(ransomNote[i], (letters.get(ransomNote[i]) - 1));
            if (letters.get(ransomNote[i]) === 0) letters.delete(ransomNote[i])
        } else {
            return false;
        }

    }


    console.log(letters)
    return true;
};


console.log(canConstruct(ransomNote, magazine))