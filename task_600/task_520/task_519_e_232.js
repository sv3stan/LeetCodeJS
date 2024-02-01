// Реализуйте очередь «первым пришел — первым обслужен» (FIFO),
// используя только два стека.Реализованная очередь должна
// поддерживать все функции обычной очереди(отправка, просмотр, извлечение и очистка).
// Реализуйте класс MyQueue:
// void push(int x) Помещает элемент x в конец очереди.
// int pop() Удаляет элемент из начала очереди и возвращает его.
// int peek() Возвращает элемент в начале очереди.
// boolean пустой() Возвращает true, если очередь пуста, в противном случае — false.

// 232

var MyQueue = function () {
    this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.queue.unshift(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    return this.queue.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.queue[this.queue.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.queue.length === 0
};


let myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
console.log(myQueue)
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
console.log(myQueue)
myQueue.peek(); // return 1
console.log(myQueue)
myQueue.pop(); // return 1, queue is [2]
console.log(myQueue)
myQueue.empty(); // return false
console.log(myQueue)
