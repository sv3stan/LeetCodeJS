// Учитывая слова массива строк, верните максимальное значение 
// length(word[i]) * length(word[j]), где эти два слова не имеют общих букв.
// Если таких двух слов не существует, верните 0.
// 318

words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
//words = ["a", "aa", "aaa", "aaaa"]
var maxProduct = function (words) {

    function getMask(word) {
        let mask = 0;
        for (let i = 0; i < word.length; i++) {
            const charCode = word.charCodeAt(i) - 'a'.charCodeAt(0);
            mask |= 1 << charCode;
        }
        return mask;
    }

    const masks = words.map(getMask);
    let answer = 0;

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if ((masks[i] & masks[j]) === 0) { // Проверяем отсутствие общих букв
                answer = Math.max(answer, words[i].length * words[j].length);
            }
        }
    }

    return answer;
};


console.log(maxProduct(words))