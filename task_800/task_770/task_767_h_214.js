/**
Вам дана строка s. Вы можете преобразовать s в палиндром  добавив символы перед ним.
Верните самый короткий палиндром, который сможете найти, выполнив это преобразование.
 */

let s = 'abcd';

let shortestPalindrome = function (s) {
    function helper(str) {
        const len = str.length;
        const table = Array.from({ length: len }).fill(0);
        let j = 0;

        for (let i = 1; i < len; i++) {
            while (j > 0 && str[i] !== str[j]) {
                j = table[j - 1];
            }
            if (str[i] === str[j]) {
                j++;
            }
            table[i] = j;
        }
        return table;
    }

    const rev = s.split('').reverse().join('');
    const newStr = s + '#' + rev;
    const kmpTable = helper(newStr);
    const longestPalindromicPrefix = kmpTable[kmpTable.length - 1];

    return rev.slice(0, s.length - longestPalindromicPrefix) + s;
};

console.log(shortestPalindrome(s));
