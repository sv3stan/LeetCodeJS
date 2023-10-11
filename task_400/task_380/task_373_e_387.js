// Дана строка s, найдите в ней первый неповторяющийся символ и верните его индекс.
// Если он не существует, верните - 1.
// 387

s = "loveleetcode"
//s = "aabb"
//s = "leetcode"

var firstUniqChar = function (s) {

    const chars = new Map();
    const except = new Set();


    for (let i = 0; i < s.length; i++) {

        if (!except.has(s[i])) {
            if (chars.has(s[i])) {
                except.add(s[i])
                chars.delete(s[i]);
            } else {
                chars.set(s[i], i)
            }

        }
    }
    console.log(chars)
    console.log(except)
    console.log(chars.size)

    return (chars.size !== 0) ? chars.values().next().value : -1;
};


console.log(firstUniqChar(s))