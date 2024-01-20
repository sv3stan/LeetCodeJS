// Вам даны две строки одинаковой длины s и t.
// За один шаг вы можете выбрать любой символ t и заменить его другим символом.
// Возвращает минимальное количество шагов, чтобы сделать t анаграммой s.
// Анаграмма строки — это строка, содержащая одинаковые символы в 
// другом(или одинаковом) порядке.

// 1347


s = "leetcode", t = "practice";

var minSteps = function (s, t) {

    const hashS = new Map();
    const hashT = new Map();

    for (let i = 0; i < s.length; i++) {
        hashS.set(s[i], (hashS.get(s[i]) ?? 0) + 1)
        hashT.set(t[i], (hashT.get(t[i]) ?? 0) + 1)
    }

    let answer = 0;
    for (const key of new Set([...hashS.keys(), ...hashT.keys()])) {
        answer += Math.abs((hashS.get(key) || 0) - (hashT.get(key) || 0));
    }

    return answer / 2;
};


console.log(minSteps(s, t))