// Разработайте алгоритм, который собирает ежедневные котировки цен на некоторые акции и 
// возвращает диапазон цен этих акций на текущий день.
// Размах цены акции за один день — это максимальное количество последовательных дней
// (начиная с этого дня и в обратном направлении), 
// в течение которых цена акции была меньше или равна цене этого дня.
// Например, если цена акции за последние четыре дня равна[7, 2, 1, 2], 
// а цена акции сегодня равна 2, то интервал сегодняшнего дня равен 4, 
// потому что, начиная с сегодняшнего дня, цена акции равна 2. 
// запас был меньше или равен 2 в течение 4 дней подряд.
// Кроме того, если цена акции за последние четыре дня равна[7, 34, 1, 2], 
// а цена акции сегодня равна 8, то интервал сегодняшнего дня равен 3, 
// потому что начиная с сегодняшнего дня цена акции равна было меньше или равно 8 в течение 3 дней подряд.
// Реализуйте класс StockSpanner:
// StockSpanner() Инициализирует объект класса.
// int next(int цена) Возвращает диапазон цены акции, учитывая, что сегодняшняя цена является ценой.
// 901


var StockSpanner = function () {

    this.stack = [];

};

/** 
 * @param {number} price
 * @return {number}
 */

StockSpanner.prototype.next = function (price) {

    let range = 1; // По умолчанию диапазон для текущей цены равен 1
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
        // Пока стек не пуст и цена в стеке меньше или равна текущей цене
        range += this.stack.pop()[1]; // Увеличиваем диапазон
    }
    this.stack.push([price, range]); // Добавляем текущую цену и ее диапазон в стек
    return range; // Возвращаем диапазон

};


var obj = new StockSpanner()
price = 31;
console.log(obj.next(price))

price = 41;
console.log(obj.next(price))

price = 48;
console.log(obj.next(price))

price = 59;
console.log(obj.next(price))

price = 79;
console.log(obj.next(price))















// //    let count = this.stack[this.stack.length - 1[1]] + 1;


// if (this.stack.length === 0) {
//     this.stack.push([price, 1])
//     //    console.log(this.stack)
//     return 1;
// } else {
//     let pointer = this.stack.length - 1;
//     let range = 1;
//     //console.log(this.stack)
//     //console.log(pointer)
//     while (pointer >= 0 && this.stack[pointer][0] <= price) {
//         //while (this.stack[pointer][1] <= price) {
//         range++;
//         pointer--
//     }
//     this.stack.push([price, range])
// }
// console.log(this.stack)
// //console.log(this.stack)
// return this.stack[this.stack.length - 1][1]












// price = 100;
// var obj = new StockSpanner()
// //var param_1 = obj.next(price)
// console.log(obj.next(price))
// price = 80;
// console.log(obj.next(price))

// price = 60;
// console.log(obj.next(price))

// price = 70;
// console.log(obj.next(price))

// price = 60;
// console.log(obj.next(price))

// price = 75;
// console.log(obj.next(price))
// price = 85;
// console.log(obj.next(price))











// this.stack.push(price)
// //console.log(this.stack)
// let result = [...this.stack];
// //console.log(result)
// let cost = result.pop();
// let count = 0;
// while (price >= cost) {
//     cost = result.pop();
//     //    console.log(cost + ' - cost - ')
//     count++;
// }
// return count;