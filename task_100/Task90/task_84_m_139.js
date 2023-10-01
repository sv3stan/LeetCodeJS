// Для заданной строки s и словаря строк wordDict вернуть true, 
// если s можно разделить на последовательность из одного или нескольких словарных слов, разделенных пробелами.
// Обратите внимание, что одно и то же слово в словаре может многократно использоваться при сегментации.
// 139


s = "leetcode";
wordDict = ["leet", "code"];


function wordBreak(s, wordDict) {

    const wordSet = new Set(wordDict);
    const memo = {};

    function findString(begin) {
        if (begin === s.length) {
            return true;
        }

        if (memo.hasOwnProperty(begin)) {
            return memo[begin];
        }

        for (let end = begin + 1; end <= s.length; end++) {
            if (wordSet.has(s.slice(begin, end)) && findString(end)) {
                memo[begin] = true;
                return true;
            }
        }

        memo[begin] = false;
        return false;
    }

    return findString(0);
};


console.log(wordBreak(s, wordDict));