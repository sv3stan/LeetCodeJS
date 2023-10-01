// Создайте класс ArrayWrapper, который принимает массив целых чисел 
// в своем конструкторе.Этот класс должен иметь две функции:
// Когда два экземпляра этого класса добавляются вместе с оператором +, 
// результирующее значение представляет собой сумму всех элементов в обоих массивах.
// Когда функция String() вызывается для экземпляра, она возвращает строку,
// разделенную запятыми, заключенную в квадратные скобки.Например, [1, 2, 3].

//2695

//let nums = [[1, 2], [3, 4]];
let nums = [[23, 98, 42, 70]];

var ArrayWrapper = function (nums) {
    this.elements = nums;
};

ArrayWrapper.prototype.valueOf = function () {
    return sum = this.elements.reduce((acc, item) => acc + item, 0)
}

ArrayWrapper.prototype.toString = function () {
    console.log(this.elements);
    let str = JSON.stringify(this.elements);
    // return this.elements(JSON.stringify);
    return str;
}


//const obj1 = new ArrayWrapper([1, 2]);
const obj1 = new ArrayWrapper([23, 98, 42, 70]);
//console.log(obj1.valueOf() + obj2.valueOf());
//obj1 + obj2; // 10
console.log(obj1.toString());
//String(obj1); // "[1,2]"
//String(obj2); // "[3,4]"
//console.log(obj1);








// var ArrayWrapper = function (nums) {
//     this.elements = nums;
// };

// ArrayWrapper.prototype.valueOf = function () {
//     //const total = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
//     //console.log(this.elements);
//     return sum = this.elements.reduce((acc, item) => acc + item, 0)
//     //console.log(sum);
//     //return sum;
// }

// ArrayWrapper.prototype.toString = function () {
//     console.log('call +++++');
//     return console.log(this.elements.toString());
// }


// const obj1 = new ArrayWrapper([1, 2]);
// const obj2 = new ArrayWrapper([3, 4]);
// console.log(obj1.valueOf() + obj2.valueOf());
// //obj1 + obj2; // 10
// String(obj1); // "[1,2]"
// //String(obj2); // "[3,4]"
// //console.log(obj1);