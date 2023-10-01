// Напишите код, улучшающий все массивы, чтобы вы могли вызвать метод array.last() 
// для любого массива, и он вернет последний элемент.Если в массиве нет элементов, он должен вернуть - 1.
// Вы можете предположить, что массив является результатом JSON.parse.
//2619

//const nums = [null, {}, 3];
const nums = [null, 0, 5, [0], [false, 16, [true, 0, 24]]];


Array.prototype.last = function () {

    if (this.length === 0) {
        return -1
    }

    const lastElement = this[this.length - 1];

    if (Array.isArray(lastElement)) {

        return this[this.length - 1].last();

    } else {

        return lastElement;
    }

    //return result;
}
//const arr = [null, 0, 5, [0], [false, 16, [true, 0, 24]], 36];
const arr = [null, 0, 5, [0], { false: 16 }];
//const arr = [];
//const arr = [1, 2, 3];
console.log(arr.last()); // 3
