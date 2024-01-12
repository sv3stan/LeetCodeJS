// Вам дана строка s четной длины.Разделите эту строку на две половины одинаковой длины,
// и пусть a будет первой половиной, а b — второй половиной.
// Две strings одинаковы, если в них одинаковое количество 
// гласных(«a», «e», «i», «o», «u», «A», «E», «I», «O», « У"). 
// Обратите внимание, что s содержит прописные и строчные буквы.
// Верните true, если a и b одинаковы.В противном случае верните false.
// 1704

s = "book"

var halvesAreAlike = function (s) {

    let n = s.length - 1;
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let i = 0; i < (n + 1) >> 1; i++) {
        if (vowels.includes(s[i])) {
            count++;
        }
        if (vowels.includes(s[n - i])) {
            count--;
        }
    }
    return count === 0;

};


console.log(halvesAreAlike(s))













// const hashFirst = new Map();
// const hashSecond = new Map();
// const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

// for (let i = 0; i < s.length / 2; i++) {

//     if (vowels.includes(s[i])) {
//         hashFirst.set(s[i], (hashFirst.get(s[i]) ?? 0) + 1);

//     }

//     if (vowels.includes(s[s.length - i])) {
//         hashSecond.set(s[s.length - i], (hashSecond.get(s[s.length - i]) ?? 0) + 1);
//     }
// }

// console.log(hashFirst)
// console.log(hashSecond)


// hashFirst.forEach((value, key) => {
//     console.log(value)
//     console.log(key)
//     if (!hashSecond.has(key) || hashSecond.get(key) !== value) {



//         return false;
//     }
// });


// return true;