// Расширьте все функции, чтобы иметь метод callPolyfill. Метод принимает объект obj в 
// качестве первого параметра и любое количество дополнительных аргументов.
// Объект становится контекстом this для функции.Дополнительные аргументы 
// передаются функции(которой принадлежит метод callPolyfill).
//     Например, если у вас была функция:
// function tax(price, taxRate) {
//     const totalCost = price * (1 + taxRate);
//     //console.log('++++++++++++++');
//     console.log(`The cost of ${this.item} is ${totalCost}`);
// }
// При вызове этой функции, такой как tax(10, 0.1), будет записано 
// «Стоимость неопределенного значения равна 11». 
// Это связано с тем, что этот контекст не был определен.
// Однако при вызове такой функции, как tax.callPolyfill({ item: "salad" }, 10, 0.1), 
// будет записано "Стоимость салата 11".Контекст this был правильно установлен, 
// и функция записала соответствующий вывод.
// Пожалуйста, решите это, не используя встроенный метод Function.call.    

//2693

fn = function add(b) {
    return this.a + b;
}



Function.prototype.callPolyfill = function (context, ...args) {


    Object.defineProperty(context, 'fn', {
        value: this
    });
    return context.fn(...args);


    //return this.bind(context)(...args);

}

let item = { "a": 5 };
let b = 6;
//function increment() { this.count++; return this.count; }
//increment.callPolyfill({ count: 1 }); // 2
//increment.callPolyfill({ count: 1 }); // 2

//fnс(item, b);

//console.log(fn.callPolyfill({ "a": 5 }, 7));

tax.callPolyfill({ item: "salad" }, 10, 0.1);