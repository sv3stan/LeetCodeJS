// Учитывая строку s и целое число k, верните максимальное количество гласных букв в любой подстроке s длиной k.
// Гласные буквы в английском языке — это «а», «е», «я», «о» и «у».
// 1456

s = "abciiidef", k = 3

s = "leetcode", k = 3
s = "aeiou", k = 2
//s = "weallloveyou", k = 7
//s = "ibpbhixfiouhdljnjfflpapptrxgcomvnb", k = 33
var maxVowels = function (s, k) {
    //let charsArray = Array.from(s);
    const letters = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    let maxCount = 0;
    for (let i = 0; i < k; i++) {
        if (letters.has(s[i])) count++
    }

    maxCount = count;
    console.log(s.length)
    console.log(count + ' - count ')
    for (let i = 1; i <= s.length - k; i++) {
        console.log('----------')
        console.log(i + ' - i -')
        if (letters.has(s[i - 1])) count--;
        console.log(count + ' - count ')
        if (letters.has(s[i + k - 1])) count++;
        // if (charsArray[i + k - 1] === 'a' || charsArray[i + k - 1] === 'e' || charsArray[i + k - 1] === 'i' || charsArray[i + k - 1] === 'o' || charsArray[i + k - 1] === 'u') count++;
        // console.log(charsArray[i + k - 1] + ' - charsArray[i + k]')
        console.log(count + ' - count ')
        maxCount = Math.max(maxCount, count)
    }
    return maxCount
};


console.log(maxVowels(s, k))