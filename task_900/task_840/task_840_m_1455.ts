/**
Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence. Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1. A prefix of a string s is any leading contiguous substring of s.
Учитывая предложение, состоящее из нескольких слов, разделенных одним пробелом, и искомого слова, проверьте, является ли искомое слово префиксом какого-либо слова в предложении. Возвращает индекс слова в предложении (с индексом 1), где searchWord — это префикс этого слова. Если searchWord является префиксом из более чем одного слова, верните индекс первого слова (минимальный индекс). Если такого слова нет, верните -1. Префиксом строки s является любая непрерывная подстрока строки s.
 */

function isPrefixOfWord(sentence: string, searchWord: string): number {
    const targetLength = searchWord.length;

    const temp = sentence.split(' ');

    const inc = (first, second): boolean => {
        for (let i = 0; i < first.length; i++) {
            if (first[i] != second[i]) return false;
        }
        return true;
    };

    for (let i = 0; i < temp.length; i++) {
        if (targetLength <= temp[i].length) {
            if (inc(searchWord, temp[i])) return i + 1;
        }
    }

    return -1;
}
