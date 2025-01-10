/**
Вам дан массив строковых слов и строковая приставка. Возвращает количество строк в словах, содержащих pref в качестве префикса. Префиксом строки s является любая непрерывная подстрока строки s.
 */

function prefixCount(words: string[], pref: string): number {
    let answer = 0;
    const hash = new Map();
    for (let i = 0; i < words.length; i++)
        hash.set(
            words[i].slice(0, pref.length),
            (hash.get(words[i].slice(0, pref.length)) || 0) + 1,
        );
    for (const prefix of hash.keys())
        if (prefix == pref) answer += hash.get(pref);
    return answer;
}
