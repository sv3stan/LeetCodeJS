// Напишите ожидаемую функцию, которая поможет разработчикам тестировать свой код.
// Он должен принимать любое значение val и возвращать объект со следующими двумя функциями.
// toBe(val) принимает другое значение и возвращает true, если два значения === друг другу.
// Если они не равны, он должен выдать ошибку «Не равно».
// notToBe(val) принимает другое значение и возвращает true, если два значения !== друг другу.
// Если они равны, он должен выдать ошибку «Равно».

//2704

let func = () => expect(5).toBe(5);

// let func = () => expect(5).toBe(null);

// let func = () => expect(5).notToBe(null);

function expect(val) {

    //console.log(val);
    return {
        toBe: function (arg) {
            if (val === arg) {
                return { "value": true };
            } else {
                return { "error": "Not Equal" };
            };
        },
        notToBe: function (arg) {
            if (val !== arg) {
                return { "value": true };
            } else {
                return { "error": "Not Equal" };
            };
        }
    }

};


console.log(expect(5).toBe(NaN)); // true

console.log(expect(5).notToBe(4)); // throws "Equal"
