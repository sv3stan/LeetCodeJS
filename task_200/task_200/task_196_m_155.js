// Спроектируйте стек, который поддерживает push, pop, top и получение минимального элемента за постоянное время.
// Реализуйте класс MinStack:
// MinStack() инициализирует объект стека.
// void push(int val) помещает элемент val в стек.
// void pop() удаляет элемент из вершины стека.
// int top() получает верхний элемент стека.
// int getMin() извлекает минимальный элемент в стеке.
// Вы должны реализовать решение с временной сложностью O(1) для каждой функции.
// 155

var MinStack = function () {
    this.items = [];
};

MinStack.prototype.push = function (val) {
    this.items.push(val);
};

MinStack.prototype.pop = function () {
    this.items.pop();
};

MinStack.prototype.top = function () {
    if (this.items.length === 0) return undefined;
    return this.items[this.items.length - 1];
};

MinStack.prototype.getMin = function () {
    if (this.items.length === 0) return undefined;

    let minItem = infinyti;
    for (let i = 1; i < this.items.length; i++) {
        if (this.items[i] < minItem) {
            minItem = this.items[i];
        }
    }
    return minItem;
};

let val = 5;
var obj = new MinStack()
console.log(obj.push(val))
console.log(obj.pop())
//var param_3 = obj.top()
    //var param_4 = obj.getMin()