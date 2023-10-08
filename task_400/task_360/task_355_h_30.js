// Даны строка s и массив строк words.Все строки слов имеют одинаковую длину.
// Конкатенированная подстрока в s - это подстрока, содержащая все строки 
// любой перестановки слов, соединенных между собой.
// Например, если words = ["ab", "cd", "ef"], то 
// "abcdef", "abefcd", "cdabef", "cdefab", "efabcd" и "efcdab" 
// являются конкатенированными строками. "acdbef" не является конкатенированной 
// подстрокой, так как не является конкатенацией ни одной перестановки слов.
// Возвращает начальные индексы всех конкатенированных подстрок в s.
// Вы можете возвращать ответ в любом порядке.
// 30


s = "barfoothefoobarman", words = ["foo", "bar"]

//s = "barfoofoobarthefoobarman", words = ["bar", "foo", "the"]
s = "lingmindraboofooowingdingbarrwingmonkeypoundcake";
words = ["fooo", "barr", "wing", "ding", "wing"]

var findSubstring = function (s, words) {

    const hash = new Map();
    const answer = [];
    for (let i = 0; i < words.length; i++) hash.set(words[i], (hash.get(words[i]) ?? 0) + 1);

    function search(index) {
        const copy = new Map();
        let countWords = words.length;
        for (let [key, value] of hash) {
            copy.set(key, value);
        }
        let length = index + words[0].length * words.length
        while (index < length) {
            let temp = '';

            //    console.log(index + ' - index  - ')
            for (let j = index; j < words[0].length + index; j++) {
                temp += s[j];
            }
            //     console.log(temp + ' - temp')

            if (copy.has(temp) && copy.get(temp) > 0) {
                copy.set(temp, (copy.get(temp) ?? 0) - 1);
                countWords -= 1;
            }
            index += words[0].length
        }
        //   console.log(countWords + ' - countWords')
        return (countWords === 0);
    }

    for (let i = 0; i < s.length; i++) {
        if (search(i)) answer.push(i)
    }


    return answer
};


console.log(findSubstring(s, words))