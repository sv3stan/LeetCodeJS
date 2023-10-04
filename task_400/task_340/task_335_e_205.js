// Даны две строки s и t.Определите, изоморфны ли они.
// Две строки s и t изоморфны, если символы в s можно заменить, чтобы получить t.
// Все вхождения символа должны быть заменены другим символом с сохранением 
// порядка символов.Никакие два символа не могут сопоставляться одному и тому же символу, 
// но символ может сопоставляться сам с собой.
// 205


s = "paper", t = "title"
//s = "egg", t = "add"
//s = "badc", t = "baba"
//s = "foo", t = "bar"

var isIsomorphic = function (s, t) {

    const hashS = new Map();
    const hashT = new Map();

    for (let i = 0; i < s.length; i++) {
        console.log(' --------  ')
        if (hashS.has(s[i])) {

            if (t[i] !== hashS.get(s[i])) return false;

        } else {

            hashS.set(s[i], t[i])
        }
        if (hashT.has(t[i])) {

            if (s[i] !== hashT.get(t[i])) return false;

        } else {

            hashT.set(t[i], s[i])
        }

        console.log(hashS)
    }

    return true;
};

console.log(isIsomorphic(s, t))


















// for (let i = 0; i < s.length; i++) {
//     console.log(' --------  ')
//     if (hashS.has(s[i])) {
//         console.log(t[i] + ' - t[i] - ' + hashS.get(s[i]) + ' - hashS.get(s[i]) - ')

//         for (const [key, values] of hashS.entries()) {
//             console.log('+++++++++++++')
//             console.log(key + ' - key - ' + s[i] + ' - s[i] - ' + values + ' - values - ' + t[i] + ' - t[i] - ');
//             if ((key === s[i] && values !== t[i])) return false;


//         }

//     } else {

//         for (const [key, values] of hashS.entries()) {
//             console.log('+++++++++++++')
//             console.log(key + ' - key - ' + s[i] + ' - s[i] - ' + values + ' - values - ' + t[i] + ' - t[i] - ');
//             if ((key === s[i] && values !== t[i])) return false;


//         }
//         hashS.set(s[i], t[i])
//     }


//     console.log(hashS)
// }