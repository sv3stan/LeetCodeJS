/**
Спроектируйте стек, который поддерживает операции увеличения над его элементами.
Реализуйте класс CustomStack:
CustomStack(int maxSize) Инициализирует объект с параметром maxSize, который представляет собой максимальное количество элементов в стеке.
void push(int x) Добавляет x на вершину стека, если стек не достиг максимального размера.
int pop() Извлекает и возвращает вершину стека или -1, если стек пуст.
void inc(int k, int val) Увеличивает k нижних элементов стека на val. Если в стеке меньше k элементов, увеличьте все элементы в стеке.
 */

let CustomStack = function (maxSize) {
    this.stack = [];
    this.maxSize = maxSize;
};

/**
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.stack.length < this.maxSize) {
        this.stack.push(x);
    }
    console.log(this.stack);
    return null;
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    return this.stack.pop() || -1;
};

/**
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    for (let i = 0; i < k && i < this.stack.length; i++) {
        this.stack[i] += val;
    }
};

let obj = new CustomStack(3);
console.log(obj);
console.log(obj.push(1));
console.log(obj.push(2));
console.log(obj.pop());
console.log(obj.push(2));
console.log(obj.push(3));
console.log(obj.push(4));
console.log(obj.increment(5, 100));
console.log(obj.increment(2, 100));
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
console.log(obj.pop());
