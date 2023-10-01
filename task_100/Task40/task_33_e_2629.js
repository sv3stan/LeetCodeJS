// Учитывая массив функций[f1, f2, f3, ..., fn], вернуть новую функцию fn, которая является функциональной композицией массива функций.
// Функциональная композиция[f(x), g(x), h(x)] равна fn(x) = f(g(h(x))).
// Функциональная композиция пустого списка функций представляет собой тождественную функцию f(x) = x.
// Вы можете предположить, что каждая функция в массиве принимает одно целое число на вход и возвращает одно целое число на выходе.

//2629

var compose = function (functions) {

    // return function (x) {

    //     for (let i = functions.length - 1; i >= 0; i--) {
    //         x = functions[i](x);
    //     }

    //     return x;
    // }
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    }

    // return function (x) {
    //     const len = functions.length;
    //     if (len === 0) {
    //         return x;
    //     }

    //     return functions.reduceRight((acc, func) => func(acc), x);
    // };



};

// const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
// fn(3) // 9

const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9

































// var compose = function (functions) {

//     //console.log(...arguments);
//     return function (x) {
//         //let result = x;

//         for (let i = functions.length - 1; i >= 0; i--) {
//             x = functions[i](x);
//         }
//         //        console.log(x);
//         return x;
//     }
// };

// //const fn = compose([x => x + 1, x => 2 * x])
// const fn = compose([x => 10 * x, x => 10 * x, x => 10 * x]);

// //console.log(compose([x => x + 1, x => 2 * x]));
// fn(1) // 9
// //compose([x => x + 1, x => 2 * x]);

// //console.log(result);