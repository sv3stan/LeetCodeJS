// Учитывая два массива строк word1 и word2, верните true,
//  если два массива представляют одну и ту же строку, 
//  и false в противном случае.
// Строка представляется массивом, если элементы массива, 
// объединенные по порядку, образуют строку.
// 1662

word1 = ["abc", "d", "defg"], word2 = ["abcddafg"]

var arrayStringsAreEqual = function (word1, word2) {


    console.log(word1.flatMap(str => str.split('')));

    const arr1 = word1.flatMap(str => str.split(''));
    const arr2 = word2.flatMap(str => str.split(''));
    const len1 = arr1.length;
    const len2 = arr2.length;
    if (len1 !== len2) return false;
    //let j = len1;
    for (let i = 0, j = len1; i != j; i++, j--) {

        if (arr1[i] !== arr2[i]) return false;
        if (arr1[j] !== arr2[j]) return false;



    }
    console.log(arr2);

    return true;

};


console.log(arrayStringsAreEqual(word1, word2))
