// Учитывая две строки s и p, верните массив всех начальных индексов анаграмм p в s.
// Вы можете вернуть ответ в любом порядке.
// 438

s = "cbaebabacd", p = "abc"
//s = "abab", p = "ab"

var findAnagrams = function (s, p) {
    function isEqual(hashM, hashA) {
        for (const [key, value] of hashM) {
            if (!hashA.has(key) || hashA.get(key) !== value) {
                return false;
            }
        }
        return true
    }
    const hashMain = new Map();
    const hashAnagram = new Map();
    for (let i = 0; i < p.length; i++) {
        hashMain.set(p[i], (hashMain.get(p[i]) || 0) + 1);
        hashAnagram.set(s[i], (hashAnagram.get(s[i]) || 0) + 1);
    }

    const answer = [];
    for (let left = 0; left + p.length - 1 < s.length; left++) {
        if (isEqual(hashMain, hashAnagram)) {
            answer.push(left)
        }

        const leftChar = s[left];
        const rightChar = s[left + p.length];

        hashAnagram.set(leftChar, (hashAnagram.get(leftChar) || 0) - 1);
        if (hashAnagram.get(leftChar) === 0) {
            hashAnagram.delete(leftChar);
        }

        hashAnagram.set(rightChar, (hashAnagram.get(rightChar) || 0) + 1);

    }
    return answer
};

console.log(findAnagrams(s, p))








































// var findAnagrams = function (s, p) {

//     function isEqual(hashM, hashA) {
//         for (const [key, value] of hashM) {
//             if (!hashA.has(key) || hashA.get(key) !== value) {
//                 return false;
//             }
//         }
//         return true
//     }
//     const hashMain = new Map();
//     const hashAnagram = new Map;

//     for (let i = 0; i < p.length; i++) {
//         if (hashMain.has(s[i])) {
//             hashMain.set(s[i], hashMain.get(s[i]) + 1)
//         } else {
//             hashMain.set(s[i], 1)
//         }
//     }
//     //console.log(hashMain)
//     for (const ch of p) {
//         if (hashAnagram.has(ch)) {
//             hashAnagram.set(ch, hashAnagram.get(ch) + 1)
//         } else {
//             hashAnagram.set(ch, 1)
//         }
//     }
//     const answer = [];
//     for (let left = 0; left + p.length - 1 < s.length; left++) {
//         console.log('++++++++++++')
//         console.log(left + ' - left - ')
//         console.log(hashMain)
//         console.log(hashAnagram)
//         if (isEqual(hashMain, hashAnagram)) {
//             console.log('!isEqual')
//             answer.push(left)
//         }
//         if (hashMain.has(s[left])) {
//             hashMain.set(s[left], hashMain.get(s[left]) - 1)
//             if (hashMain.get(s[left]) === 0) hashMain.delete(s[left]);
//         } else {
//             hashMain.delete(s[left]);
//         }
//         if (hashMain.has(s[left + p.length])) {
//             console.log(' --------- ')
//             hashMain.set(s[left + p.length], hashMain.get(s[left + p.length]) + 1)
//         } else {
//             console.log(' ??????????? ')
//             hashMain.set(s[left + p.length], 1)
//         }


//     }


//     console.log(hashMain)
//     console.log(hashAnagram)
//     return answer
// };