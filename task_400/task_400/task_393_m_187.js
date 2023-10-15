// Последовательность ДНК состоит из ряда нуклеотидов, 
// сокращенно обозначенных как «А», «С», «G» и «Т».
// Например, «ACGAATTCCG» — это последовательность ДНК.
// При изучении ДНК полезно идентифицировать повторяющиеся 
// последовательности внутри ДНК.
// Дана строка s, представляющая последовательность ДНК, 
// верните все 10 - буквенные последовательности(подстроки), 
// которые встречаются в молекуле ДНК более одного раза.
// Вы можете вернуть ответ в любом порядке.
// 187


s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

var findRepeatedDnaSequences = function (s) {
    const subStr = {};
    const result = [];

    for (let i = 0; i <= s.length - 10; i++) {
        const str = s.substring(i, i + 10);

        if (subStr[str]) {
            subStr[str]++;
        } else {
            subStr[str] = 1;
        }
    }
    console.log(subStr)
    for (const key in subStr) {
        if (subStr[key] > 1) {
            result.push(key);
        }
    }

    return result;
};


console.log(findRepeatedDnaSequences(s))