// Разработайте структуру данных, которая поддерживает добавление новых слов
// и определение совпадения строки с какой - либо ранее добавленной строкой.
// Реализуйте класс WordDictionary:
// WordDictionary() Инициализирует объект.
// void addWord(word) Добавляет слово в структуру данных, его можно сопоставить позже.
// bool search(word) Возвращает true, если в структуре данных есть какая - либо строка, 
// соответствующая слову, или false в противном случае.
// слово может содержать точки '.' где точкам можно сопоставить любую букву.
// 211


class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}
var WordDictionary = function () {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    let node = this.root;
    for (const char of word) {
        if (!node.children.has(char)) {
            node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
    }
    node.isEndOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    return this.searchRecursive(this.root, word, 0);
};



WordDictionary.prototype.searchRecursive = function (node, word, index) {
    if (index === word.length) {
        return node.isEndOfWord;
    }

    const char = word[index];

    if (char === '.') {
        for (const child of node.children.values()) {
            if (this.searchRecursive(child, word, index + 1)) {
                return true;
            }
        }
    } else {
        if (node.children.has(char)) {
            return this.searchRecursive(node.children.get(char), word, index + 1);
        }
    }

    return false;
}



/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */


const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True