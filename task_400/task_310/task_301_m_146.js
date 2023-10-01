// Спроектируйте структуру данных, которая соответствует ограничениям кэша 
// «наименее недавно использованного» (LRU).
// Реализуйте класс LRUCache:
// LRUCache(int емкость) Инициализировать кэш LRU с емкостью положительного размера.
// int get(int key) Возвращает значение ключа, если ключ существует, 
// в противном случае возвращает - 1.
// void put(int key, int value) Обновить значение ключа, если ключ существует.
// В противном случае добавьте пару ключ - значение в кеш.Если количество ключей 
// превышает емкость этой операции, удалите ключ, который использовался реже всего.
// Каждая из функций get и put должна выполняться со средней временной сложностью O(1).
// 146

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.hashTable = new Map();
    this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (!this.hashTable.has(key)) return -1;
    const val = this.hashTable.get(key);
    this.hashTable.delete(key);
    this.hashTable.set(key, val);
    return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    this.hashTable.delete(key);
    this.hashTable.set(key, value);
    if (this.hashTable.size > this.capacity) {
        const item = this.hashTable.keys().next().value;
        this.hashTable.delete(item);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4