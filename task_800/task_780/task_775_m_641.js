/**
Разработайте свою реализацию циклической двусторонней очереди (deque).
Реализуйте класс MyCircularDeque:
MyCircularDeque(int k) Инициализирует дек с максимальным размером k.
boolean InsertFront() Добавляет элемент в начало Deque. Возвращает true, если операция прошла успешно, или false в противном случае.
логическое значение InsertLast() Добавляет элемент в конец Deque. Возвращает true, если операция прошла успешно, или false в противном случае.
boolean deleteFront() Удаляет элемент в начале Deque. Возвращает true, если операция прошла успешно, или false в противном случае.
boolean deleteLast() Удаляет элемент в задней части Deque. Возвращает true, если операция прошла успешно, или false в противном случае.
int getFront() Возвращает передний элемент из Deque. Возвращает -1, если дек пуст.
int getRear() Возвращает последний элемент из Deque. Возвращает -1, если дек пуст.
boolean isEmpty() Возвращает true, если дек пуст, или false в противном случае.
boolean isFull() Возвращает true, если дек заполнен, или false в противном случае.
 */

/**
 * @param {number} k
 */
let MyCircularDeque = function (k) {
    this.k = k;
    this.deque = new Array(k).fill(null);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.isFull()) {
        return false;
    }
    this.front = (this.front - 1 + this.k) % this.k;
    this.deque[this.front] = value;
    this.size++;
    return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.isFull()) {
        return false;
    }
    this.deque[this.rear] = value;
    this.rear = (this.rear + 1) % this.k;
    this.size++;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.isEmpty()) {
        return false;
    }
    this.deque[this.front] = null;
    this.front = (this.front + 1) % this.k;
    this.size--;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.isEmpty()) {
        return false;
    }
    this.rear = (this.rear - 1 + this.k) % this.k;
    this.deque[this.rear] = null;
    this.size--;
    return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.deque[this.front];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    if (this.isEmpty()) {
        return -1;
    }
    return this.deque[(this.rear - 1 + this.k) % this.k];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    return this.size === this.k;
};
