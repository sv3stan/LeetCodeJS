/**
Вам даны две строки s и t такие, что каждый символ встречается в строке s не более одного раза, и t является перестановкой s.
Разница перестановок между s и t определяется как сумма абсолютной разницы между индексом вхождения каждого символа в s и индексом вхождения того же символа в t.
Возвращает разницу перестановок между s и t.
 */

let findPermutationDifference = function (s, t) {
    const hash = new Map();
    for (let i = 0; i < s.length; i++) {
        hash.set(s[i], i);
    }
    let answer = 0;
    for (let i = 0; i < t.length; i++) {
        answer += Math.abs(i - hash.get(t[i]));
    }
    return answer;
};

console.log(findPermutationDifference('ab', 'ba'));
