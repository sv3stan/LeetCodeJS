// Две строки считаются близкими, если одну из другой можно получить с помощью следующих операций:
// Операция 1: Поменяйте местами любые два существующих персонажа.
// Например, abcde -> aecdb
// Операция 2: Преобразуйте каждое появление одного существующего символа в другой существующий символ и 
// сделайте то же самое с другим персонажем.
// Например, aacabb -> bbcbaa(все буквы a превращаются в буквы b, а все буквы b превращаются в буквы a)
// Вы можете использовать операции с любой строкой столько раз, сколько необходимо.
// Учитывая две строки, слово1 и слово2, верните true, если слова1 и слово2 близки, и false в противном случае.
// 1657

word1 = "cabbba", word2 = "abbccc"

var closeStrings = function (word1, word2) {
    if (word1.length != word2.length) return false
    if (word1 == word2) return true

    arr1 = Array(26).fill(0)
    arr2 = Array(26).fill(0)

    for (let i = 0; i < word1.length; i++) {
        arr1[word1.charCodeAt(i) - 97]++
        arr2[word2.charCodeAt(i) - 97]++
    }

    for (let i = 0; i < word1.length; i++) {
        if (arr1[i] > 0 && arr2[i] == 0) return false
        if (arr2[i] > 0 && arr1[i] == 0) return false
    }

    s1 = arr1.sort((a, b) => a - b).join('')
    s2 = arr2.sort((a, b) => a - b).join('')

    if (s1 == word1.length) return false

    return s1 == s2
};


console.log(closeStrings(word1, word2))