// Строка хороша, если в ней нет повторяющихся символов.
// Дана строка s, возвращает количество хороших подстрок длины три в.
// Обратите внимание: если одна и та же подстрока встречается 
// несколько раз, каждое вхождение должно учитываться.
// Подстрока — это непрерывная последовательность символов в строке.

// 1876

s = "aababcabc"

var countGoodSubstrings = function (s) {
    const hash = new Set()
    let answer = 0;
    let left = 0;
    let right = 0;

    while (right < s.length) {

        if (!hash.has(s[right]) && right - left < 3) {

            hash.add(s[right]);

            if (hash.size === 3) {
                answer++;
            }

            right++;
        } else {

            hash.delete(s[left])
            left++

        }

    }
    return answer;


};


console.log(countGoodSubstrings(s))



// let answer = 0;
// //const arr = s.split('');
// for (let end = 2; end < s.length; end++) {
//     let hash = new Set([s[end - 2], s[end - 1], s[end]]);
//     if (hash.size === 3) {
//         answer++
//     }
// }
// return answer;