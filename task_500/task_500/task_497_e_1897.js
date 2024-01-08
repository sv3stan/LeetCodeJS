// Вам дан массив строковых слов(с индексом 0).
// За одну операцию выберите два разных индекса i и j, 
// где words[i] — непустая строка, и переместите любой 
// символ из слова[i] в ​​любую позицию в слове[j].
// Возвращайте true, если вы можете сделать каждую 
// строку в словах равной с помощью любого количества 
// операций, и false в противном случае.

// 1897

words = ["abc", "aabc", "bc"]
//words = ["ab", "a"]

var makeEqual = function (words) {

    const hashArray = Int16Array.from({ length: 26 }).fill(0);

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            hashArray[words[i].charCodeAt(j) - 97]++
        }
    }


    for (let i = 0; i < 26; i++) {
        if (hashArray[i] % words.length !== 0) return false;
    }

    return true;

};


console.log(makeEqual(words))