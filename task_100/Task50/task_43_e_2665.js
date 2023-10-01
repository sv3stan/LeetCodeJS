// Напишите функцию createCounter.Он должен принимать начальное целое число init.
// Он должен возвращать объект с тремя функциями.
// Три функции:
//     increment() увеличивает текущее значение на 1, а затем возвращает его.
//     decrement() уменьшает текущее значение на 1, а затем возвращает его.
//     reset() устанавливает текущее значение в значение init, а затем возвращает его.
//2665

//let count = 0;

function createCounter(init) {

    let temp = init;

    return {
        increment: () => (++temp),
        decrement: () => (--temp),
        reset: () => (temp = init)
    }

};


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4
//console.log(counter.decrement()); // 4



// let count = {
//     item: init,
//     increment: function () { return ++this.item },
//     decrement: function () { return --this.item },
//     reset: function () { return this.item = init }
// }
// return count;
