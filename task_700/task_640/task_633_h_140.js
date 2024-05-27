/*
Учитывая строку s и словарь строк wordDict, добавьте пробелы в s, чтобы построить предложение, в котором каждое слово является допустимым словарным словом. Верните все такие возможные предложения в любом порядке.
Обратите внимание, что одно и то же слово в словаре может использоваться при сегментации несколько раз.
*/

let s = 'pineapplepenapple';
let wordDict = ['apple', 'pen', 'applepen', 'pine', 'pineapple'];

let wordBreak = function (s, wordDict) {
    const set = new Set(wordDict);
    const res = [];

    function backtrack(start, path) {
        if (start === s.length) {
            res.push(path.join(' '));
            return;
        }

        for (let end = start + 1; end <= s.length; end++) {
            let word = s.slice(start, end);
            if (set.has(word)) {
                path.push(word);
                backtrack(end, path);
                path.pop();
            }
        }
    }

    backtrack(0, []);
    return res;
};

console.log(wordBreak(s, wordDict));
