/**
You are given a string s that consists of lowercase English letters. A string is called special if it is made up of only a single character. For example, the string "abc" is not special, whereas the strings "ddd", "zz", and "f" are special. Return the length of the longest special substring of s which occurs at least thrice, or -1 if no special substring occurs at least thrice. A substring is a contiguous non-empty sequence of characters within a string.
Вам дана строка s, состоящая из строчных английских букв. Строка называется специальной, если она состоит только из одного символа. Например, строка «abc» не является специальной, тогда как строки «ddd», «zz» и «f» являются специальными. Возвращает длину самой длинной специальной подстроки s, которая встречается как минимум трижды, или -1, если ни одна специальная подстрока не встречается как минимум трижды. Подстрока — это непрерывная непустая последовательность символов внутри строки.
 */

function maximumLength(s: string): number {
    const hash = new Map<string, number>();
    const n = s.length;

    for (let i = 0; i < n; i++) {
        let char = s[i];
        let subStr = '';
        for (let j = i; j < n && s[j] === char; j++) {
            subStr += char;
            hash.set(subStr, (hash.get(subStr) || 0) + 1);
        }
    }

    let max = -1;
    for (const [subStr, count] of hash) {
        if (count >= 3) {
            max = Math.max(max, subStr.length);
        }
    }

    return max;
}
