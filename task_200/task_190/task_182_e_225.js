// Внедрите стек «последним пришел — первым обслужен» (LIFO), используя только две очереди.
// Реализованный стек должен поддерживать все функции обычного стека(push, top, pop и пустой).
// Реализуйте класс MyStack:
// void push(int x) Помещает элемент x на вершину стека.
// int pop() Удаляет элемент из вершины стека и возвращает его.
// int top() Возвращает элемент на вершине стека.
// boolean пустой() Возвращает true, если стек пуст, в противном случае — false.
//     Примечания:
// Вы должны использовать только стандартные операции очереди, а это означает, 
// что допустимы только операции перемещения назад, просмотра / извлечения спереди, размера и пустого состояния.
// В зависимости от вашего языка очередь может не поддерживаться изначально.Вы можете моделировать очередь, 
// используя список или дек(двустороннюю очередь), если вы используете только стандартные операции очереди.
// 225


var MyStack = function () {
    this.items = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.items.unshift(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.empty()) return undefined;
    return this.items.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (this.empty()) return undefined;
    return this.items[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.items.length === 0 ? true : false;
};

var obj = new MyStack()
obj.push(1)
console.log(obj)
obj.push(2)
console.log(obj)
obj.pop()
console.log(obj)
obj.top()
console.log(obj)
obj.empty()
console.log(obj)
// var param_2 = obj.pop()
// var param_3 = obj.top()
// var param_4 = obj.empty()
