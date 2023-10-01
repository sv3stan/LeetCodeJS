// У вас есть набор, который содержит все положительные целые числа[1, 2, 3, 4, 5, ...].
// Реализуйте класс SmallestInfiniteSet:
// SmallestInfiniteSet() Инициализирует объект SmallestInfiniteSet, 
// чтобы он содержал все положительные целые числа.
// int popSmallest() Удаляет и возвращает наименьшее целое число, 
// содержащееся в бесконечном наборе.
// void addBack(int num) Добавляет положительное целое число обратно в бесконечный набор, 
// если его еще нет в бесконечном наборе.
// 2336



var SmallestInfiniteSet = function () {
    // this.infiniteSet = new Map();
    // this.index = 0;

    // Инициализируем пустое множество (Set) для добавленных целых чисел.
    this.infiniteSet = new Set();

    // Устанавливаем начальное значение для текущего целого числа.
    this.current = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    // let min = Infinity;
    // let minKey = 0;
    // for (const [value, key] of this.infiniteSet.entries()) {
    //     if (min < value) min = value;
    //     minKey = key
    // }
    // this.infiniteSet.delete(minKey);
    // this.index ? this.index-- : this.index;
    // return min ? min : null;

    let result;
    if (this.infiniteSet.size > 0) {
        // Если в множестве `infiniteSet` есть элементы, это означает,
        // что у нас есть числа, которые были добавлены и теперь хранятся в этом множестве.

        // Преобразуем Set в массив, сортируем его по возрастанию
        // и получаем наименьший элемент.
        const min = Array.from(this.infiniteSet).sort((a, b) => a - b);
        result = min[0];

        // Удаляем наименьший элемент из множества `infiniteSet`.
        this.infiniteSet.delete(result);
    } else {
        // Если в множестве `infiniteSet` нет элементов,
        // это означает, что мы достигли наименьшего положительного целого числа,
        // и мы возвращаем текущее значение `current` как наименьшее число.
        result = this.current;

        // Увеличиваем `current` на 1 для следующего наименьшего числа.
        this.current += 1;
    }
    return result;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {

    // Метод `addBack` добавляет целое число `num` в множество `infiniteSet`,
    // если оно соответствует условиям:
    // 1. `num` больше текущего значения `current`.
    // 2. `num` не уже содержится в множестве `infiniteSet`.

    if (this.current <= num || this.infiniteSet.has(num)) {
        return; // Ничего не делаем, так как `num` не удовлетворяет условиям.
    }

    // Добавляем `num` в множество `infiniteSet`.
    this.infiniteSet.add(num);

    // this.infiniteSet.set(this.index, num);
    // this.index++;

};
// num = 1;
// var obj = new SmallestInfiniteSet()
// var param_1 = obj.popSmallest()
// obj.addBack(num)

// console.log(obj)


const smallestInfiniteSet = new SmallestInfiniteSet();
console.log(smallestInfiniteSet.addBack(2)); // null
console.log(smallestInfiniteSet.popSmallest()); // 1
console.log(smallestInfiniteSet.popSmallest()); // 2
console.log(smallestInfiniteSet.popSmallest()); // 3
console.log(smallestInfiniteSet.addBack(1)); // null
console.log(smallestInfiniteSet.popSmallest()); // 1
console.log(smallestInfiniteSet.popSmallest()); // 4
console.log(smallestInfiniteSet.popSmallest()); // 5


// ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
// [[], [2], [], [], [], [1], [], [], []]
// Output
// [null, null, 1, 2, 3, null, 1, 4, 5]