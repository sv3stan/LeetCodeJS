/**
Разработайте структуру данных для хранения количества строк с возможностью возврата строк с минимальным и максимальным количеством.
Реализуйте класс AllOne:
AllOne() Инициализирует объект структуры данных.
inc(String key) Увеличивает счетчик строкового ключа на 1. Если ключ не существует в структуре данных, вставьте его со счетчиком 1.
dec(String key) Уменьшает счетчик строкового ключа на 1. Если после уменьшения счетчик ключа равен 0, удалите его из структуры данных. Гарантируется, что ключ существует в структуре данных до декремента.
getMaxKey() Возвращает один из ключей с максимальным числом. Если элемента не существует, верните пустую строку «».
getMinKey() Возвращает один из ключей с минимальным количеством. Если элемента не существует, верните пустую строку «».
Обратите внимание, что каждая функция должна выполняться со средней временной сложностью O(1).
 */

let AllOne = function () {
    // Хранит количество (частоту) для каждого ключа
    this.frequencyMap = {};

    // Хранит ключи, сгруппированные по их частоте
    this.keysByFrequency = {};
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.inc = function (key) {
    // Текущая частота ключа или 0, если ключа еще нет
    let currentFreq = this.frequencyMap[key] || 0;
    // Новая частота на 1 больше
    let newFreq = currentFreq + 1;

    // Обновляем частоту ключа
    this.frequencyMap[key] = newFreq;

    // Удаляем ключ из старой группы частот
    if (currentFreq in this.keysByFrequency) {
        let keysSet = this.keysByFrequency[currentFreq];
        keysSet.delete(key);
        if (keysSet.size === 0) {
            delete this.keysByFrequency[currentFreq];
        }
    }

    // Добавляем ключ в новую группу частот
    if (!(newFreq in this.keysByFrequency)) {
        this.keysByFrequency[newFreq] = new Set();
    }
    this.keysByFrequency[newFreq].add(key);
};

/**
 * @param {string} key
 * @return {void}
 */
AllOne.prototype.dec = function (key) {
    // Если ключа нет, ничего не делаем
    if (!(key in this.frequencyMap)) {
        return;
    }

    // Текущая частота ключа
    let currentFreq = this.frequencyMap[key];
    // Новая частота на 1 меньше
    let newFreq = currentFreq - 1;

    // Обновляем частоту ключа
    this.frequencyMap[key] = newFreq;

    // Удаляем ключ из старой группы частот
    if (currentFreq in this.keysByFrequency) {
        let keysSet = this.keysByFrequency[currentFreq];
        keysSet.delete(key);
        if (keysSet.size === 0) {
            delete this.keysByFrequency[currentFreq];
        }
    }

    // Если новая частота больше 0, добавляем ключ в новую группу частот
    if (newFreq > 0) {
        if (!(newFreq in this.keysByFrequency)) {
            this.keysByFrequency[newFreq] = new Set();
        }
        this.keysByFrequency[newFreq].add(key);
    } else {
        // Если частота стала 0, удаляем ключ полностью
        delete this.frequencyMap[key];
    }
};

/**
 * @return {string}
 */
AllOne.prototype.getMaxKey = function () {
    // Если нет ключей, возвращаем пустую строку
    if (Object.keys(this.keysByFrequency).length === 0) {
        return '';
    }
    // Находим максимальную частоту
    let maxFreq = Math.max(...Object.keys(this.keysByFrequency));
    // Возвращаем первый ключ с этой частотой
    return Array.from(this.keysByFrequency[maxFreq])[0];
};

/**
 * @return {string}
 */
AllOne.prototype.getMinKey = function () {
    // Если нет ключей, возвращаем пустую строку
    if (Object.keys(this.keysByFrequency).length === 0) {
        return '';
    }
    // Находим минимальную частоту
    let minFreq = Math.min(...Object.keys(this.keysByFrequency));
    // Возвращаем первый ключ с этой частотой
    return Array.from(this.keysByFrequency[minFreq])[0];
};

let obj = new AllOne();
console.log(obj.inc('hello'));
console.log(obj.inc('hello'));
console.log(obj.getMaxKey());
console.log(obj.getMinKey());
console.log(obj.inc('leet'));
console.log(obj.getMaxKey());
console.log(obj.getMinKey());
