/**
Вам дан массив слов размера n, состоящий из непустых строк.
Мы определяем оценку строкового термина как количество строк word[i] таких, что термин является префиксом слов[i].
Например, если слова = ["a", "ab", "abc", "cab"], то оценка "ab" равна 2, поскольку "ab" является префиксом как "ab", так и "abc". .
Возвращает массив ответа размера n, где ответ[i] — это сумма оценок каждого непустого префикса слов[i].
Обратите внимание, что строка рассматривается как префикс самой себя.
 */

let words = ['abc', 'ab', 'bc', 'b'];

class TrieNode {
    constructor() {
        this.children = {}; // Дети данного узла (символы)
        this.count = 0; // Количество слов, которые проходят через этот узел
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Метод для вставки слова в Trie
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode(); // Если символа еще нет, добавляем
            }
            node = node.children[char];
            node.count++; // Увеличиваем счетчик для этого префикса
        }
    }

    // Метод для подсчета суммы префиксных счетчиков для данного слова
    getPrefixScore(word) {
        let node = this.root;
        let score = 0;
        for (const char of word) {
            node = node.children[char];
            score += node.count; // Суммируем количество слов, имеющих данный префикс
        }
        return score;
    }
}

let sumPrefixScores = function (words) {
    const trie = new Trie();
    const result = [];

    // Вставляем каждое слово в Trie
    for (const word of words) {
        trie.insert(word);
    }

    // Для каждого слова считаем сумму префиксных счетчиков
    for (const word of words) {
        result.push(trie.getPrefixScore(word));
    }

    return result;
};

console.log(sumPrefixScores(words));
