// Дерево(произносится как «попробуй») или префиксное дерево — это древовидная структура данных, 
// используемая для эффективного хранения и извлечения ключей в наборе строк.
// Существуют различные приложения этой структуры данных, такие как автозаполнение и проверка орфографии.
// Реализуйте класс Trie:
// Trie() Инициализирует объект дерева.
// void Insert(String word) Вставляет строковое слово в дерево.
// boolean search(String word) Возвращает true, если строковое слово находится в дереве(т.е.было вставлено ранее), 
// и false в противном случае.
// логическое значение startWith(String prefix) Возвращает true, если ранее было вставлено строковое слово с 
// префиксом - префиксом, и false в противном случае.
// 208

const util = require('util');
util.inspect.defaultOptions.depth = null;

var TrieNode = function () {
    this.next = new Map();
    this.isEnd = false;
};

var Trie = function () {
    this.root = new TrieNode();
};

Trie.prototype.insert = function (word) {
    let current = this.root;

    for (const char of word) {
        if (!current.next.has(char)) {
            // Если нет узла для текущей буквы, создаем новый узел.
            current.next.set(char, new TrieNode());
        }

        // Переходим к следующему узлу.
        current = current.next.get(char);
    }

    // Устанавливаем флаг конца слова для последнего узла.
    current.isEnd = true;

};

Trie.prototype.search = function (word) {
    let current = this.root;
    for (const char of word) {
        if (!current.next.has(char)) {
            return false;
        }
        current = current.next.get(char);
    }
    return current.isEnd;
};

Trie.prototype.startsWith = function (prefix) {

    let current = this.root;
    for (const char of prefix) {
        if (!current.next.has(char)) {
            return false;
        }
        current = current.next.get(char);
    }

    return true;

};
word = 'apply'
prefix = 'ap'
var obj = new Trie()
obj.insert(word)
word = 'apply'
var param_2 = obj.search(word)
var param_3 = obj.startsWith(prefix)
//console.log(obj)
console.log(param_3)
