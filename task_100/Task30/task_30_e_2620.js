// Учитывая целое число n, вернуть функцию счетчика.
// Эта функция - счетчик сначала возвращает n, 
// а затем возвращает на 1 больше предыдущего 
// значения при каждом последующем вызове(n, n + 1, n + 2 и т.д.).

//2620

var createCounter = function (n) {
    let sum = n;
    return function () {
        // sum++;
        return sum++;
    };
};



const counter = createCounter(10)
//counter() // 10
console.log(counter());
//counter() // 11
console.log(counter());
//counter() // 12
console.log(counter());



