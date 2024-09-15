/**
Учитывая строку s, верните размер самой длинной подстроки, содержащей каждую гласную четное количество раз. То есть «а», «е», «я», «о» и «у» должны появиться четное количество раз.
 */

let s = 'eleetminicoworoep';

let findTheLongestSubstring = function (s) {
    const vowels = 'aeiou';
    const mask = { a: 1 << 0, e: 1 << 1, i: 1 << 2, o: 1 << 3, u: 1 << 4 };
    let state = 0;
    const seen = { 0: -1 };
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            state ^= mask[s[i]];
        }

        if (state in seen) {
            res = Math.max(res, i - seen[state]);
        } else {
            seen[state] = i;
        }
    }

    return res;
};

console.log(findTheLongestSubstring(s));
