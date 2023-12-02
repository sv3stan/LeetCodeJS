// Вам дан массив строковых слов и строковых символов.
// Строка хороша, если она может быть составлена ​​из символов из 
// символов(каждый символ можно использовать только один раз).
// Возвращает сумму длин всех хороших строк в словах.

// 1160

words = ["hello", "world", "leetcode"], chars = "welldonehoneyr"

var countCharacters = function (words, chars) {


    function isGood(word, chars) {
        const count = {};

        for (const char of chars) {
            count[char] = (count[char] || 0) + 1;
        }


        for (const char of word) {
            if (!count[char]) {
                return false;
            }
            count[char]--;
        }

        return true;
    }


    let answer = 0;

    for (const word of words) {
        if (isGood(word, chars)) {
            answer += word.length;
        }
    }

    return answer;

};


console.log(countCharacters(words, chars))


