// Вам дан массив words, каждое word состоит из строчных английских букв.
// wordA является предшественником wordB тогда и только тогда, 
// когда мы можем вставить ровно одну букву в любом месте wordA, 
// не меняя порядок остальных символов, чтобы оно стало равным wordB.
// Например, «abc» является предшественником «abac», а «cba» не является предшественником «bcad».
// Цепочка word — это последовательность words[word1, word2, ..., wordk] с k >= 1, 
// где word1 — предшественник word2, word2 — предшественник word4 и т.д.
// Отдельное word тривиально представляет собой цепочку words с k == 1.
// Возвращает длину максимально длинной цепочки words, состоящей из words, выбранных из заданного списка words.
// 1048

words = ["a", "b", "ba", "bca", "bda", "bdca"] // 4
//words = ["a", "b", "ba", "abc", "abd", "bdca"] // 2
//words = ["hello"] // 2


var longestStrChain = function (words) {


    function compare(wordA, wordB) {
        if (wordA.length + 1 !== wordB.length) {
            return false;
        }

        let i = 0;
        let j = 0;
        let count = 0;

        while (i < wordA.length && j < wordB.length) {
            if (wordA[i] === wordB[j]) {
                i++;
            } else {
                count++;
                if (count > 1) {
                    return false;
                }
            }
            j++;
        }

        return true;
    }

    words.sort((a, b) => a.length - b.length);
    const dp = new Array(words.length).fill(1);

    for (let i = 1; i < words.length; i++) {
        for (let j = 0; j < i; j++) {
            if (compare(words[j], words[i])) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);


};


console.log(longestStrChain(words))
