// Вам даны две строки word1 и word2.Объедините строки, добавляя буквы в чередующемся порядке, 
// начиная со слова1.Если строка длиннее другой, добавьте дополнительные буквы в конец объединенной строки.
// Вернуть объединенную строку.
// 1768

word1 = "abc";
word2 = "pqr";
word1 = "ab", word2 = "pqrs"
word1 = "abcd", word2 = "pq"

function mergeAlternately(word1, word2) {

    let mergedArray = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < word1.length || i2 < word2.length) {

        if (i1 < word1.length) {
            mergedArray.push(word1[i1]);
            i1++;
        }
        if (i2 < word2.length) {
            mergedArray.push(word2[i2]);
            i2++;
        }
    }

    return mergedArray.join('');

};


console.log(mergeAlternately(word1, word2))







//function mergeAlternately(word1, word2) {

//     let mergedString = '';
//     let i1 = 0;
//     let i2 = 0;
//     while (i1 < word1.length || i2 < word2.length) {

//         if (i1 < word1.length) {
//             mergedString = mergedString + word1[i1];
//             i1++;
//         }
//         if (i2 < word2.length) {
//             mergedString = mergedString + word2[i2];
//             i2++;
//         }
//     }

//     return mergedString;

// };