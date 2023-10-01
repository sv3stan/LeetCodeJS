// Дана строка s, найдите длину самой длинной
// подстрока без повторяющихся символов.
// 3


//let s = "abcabcdbb";
//let s = "bbbbb";
let s = "pwwkew";

function lengthOfLongestSubstring(s) {
    // let count = 0;
    // let i = 0;
    // let maxCount = 0;
    // let map = new Set();
    // while (i < s.length) {
    //     console.log(i + '- i');
    //     console.log(s[i] + '- s[i] - ');

    //     if (!map.has(s[i])) {
    //         map.add(s[i]);
    //         count++;
    //         if (maxCount < count) {
    //             maxCount = count;
    //         }
    //         console.log(count + '- count');
    //         console.log(map);

    //     } else {
    //         map.clear();
    //         map.add(s[i]);

    //         count = 1;

    //         console.log(map);
    //     }

    //     i++;

    // }

    if (s.length === 0) {
        return 0;
    }

    let start = 0;
    let end = 0;
    let maxCount = 0;
    let set = new Set();

    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            maxCount = Math.max(maxCount, end - start + 1);
            end++;
        } else {
            set.delete(s[start]);
            start++;
        }
    }

    return maxCount;

};

console.log(lengthOfLongestSubstring(s));