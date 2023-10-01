// Имея строку s, проверьте, можно ли ее построить, 
// взяв ее подстроку и добавив вместе несколько копий этой подстроки.
// 459

s = 'abababca';
s = "abab"
s = "abcabcabcabc"
s = "aba"
s = "abababaaba"
s = "ababba"
var repeatedSubstringPattern = function (s) {
    const n = s.length;

    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            const subStr = s.substring(0, len);
            let isRepeated = true;
            for (let i = len; i < n; i += len) {
                if (s.substring(i, i + len) !== subStr) {
                    isRepeated = false;
                    break;
                }
            }
            if (isRepeated) {
                return true;
            }
        }
    }

    return false;
};


console.log(repeatedSubstringPattern(s));