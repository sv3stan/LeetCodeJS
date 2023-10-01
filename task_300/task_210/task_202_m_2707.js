// Вам дана строка s с нулевым индексом и словарь слов.Вам необходимо разбить s
// на одну или несколько непересекающихся подстрок так, чтобы каждая подстрока присутствовала в словаре.
// В s могут быть дополнительные символы, которых нет ни в одной из подстрок.
// Верните минимальное количество оставшихся дополнительных символов, если вы оптимально разобьете s.
// 2707
// -- Определите DP[i] как минимальный дополнительный символ, если оптимально разбить s[0:i].

s = "leetscode", dictionary = ["leet", "code", "leetcode"]
//s = "sayhelloworld", dictionary = ["hello", "world"]
// s = "azvzulhlwxwobowijiyebeaskecvtjqwkmaqnvnaomaqnvf";
// dictionary = "na", "i", "edd", "wobow", "kecv", "b", "n", "or", "jj", "zul", "vk", "yeb", "qnfac", "azv", "grtjba", "yswmjn", "xowio", "u", "xi", "pcmatm", "maqnv";


s = "dwmodizxvvbosxxw";
dictionary = ["ox", "lb", "diz", "gu", "v", "ksv", "o", "nuq", "r", "txhe", "e", "wmo", " cehy", "tskz", "ds", "kzbu"];

// s = "leetcode";
// wordDict = ["leet", "code"];
var minExtraChar = function (s, dictionary) {
    const length = s.length;
    const dp = new Array(length).fill(Infinity);

    for (let i = 0; i < length; i++) {
        for (let element of dictionary) {
            const elementLength = element.length;
            if (i - elementLength + 1 >= 0) {
                const subString = s.substring(i - elementLength + 1, i + 1);
                if (subString === element) {
                    const prevCost = (i - elementLength >= 0) ? dp[i - elementLength] : 0;
                    dp[i] = Math.min(dp[i], prevCost);
                }
            }
        }
        dp[i] = Math.min(dp[i], (i > 0) ? dp[i - 1] + 1 : 1);
    }
    console.log(dp)
    return dp[length - 1];
};

console.log(minExtraChar(s, dictionary))