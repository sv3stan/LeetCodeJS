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



var findSubstring = function (s, words) {

    const hash = {};

    for (let i = 0; i < words.length; i++) {
        hash[i] = words[i];
    }
    const values = Object.values(hash);
    console.log(values)
    // console.log(hash);
    let i = 0;

    while (i < s.length) {
        let temp = '';
        for (let j = i; j < words[0].length + i; j++) {
            temp += s[j];
        }
        console.log(temp)
        if (values.includes(temp)) {
            console.log(' --------  ')
        }

        i += words[0].length
    }


    console.log(hash)
};


console.log(findSubstring(s, words))