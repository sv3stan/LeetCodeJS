// Для заданной функции fn вернуть новую функцию, идентичную исходной функции, 
// за исключением того, что она гарантирует, что fn будет вызвана не более одного раза.
// При первом вызове возвращаемой функции она должна вернуть тот же результат, что и fn.
// При каждом последующем вызове он должен возвращать значение undefined.

//2666

//let outPut = [];
var once = function (fn) {
    let isCall = false;
    let result;
    return function (...args) {
        if (!isCall) {
            result = fn(...args);
            isCall = true;

        }
        //console.log(result);
        return result;
    }


};


//let fn = (a, b, c) => (a + b + c)
let fn = (a, b, c) => (a * b * c);
//calls = [[5, 7, 4], [2, 3, 6], [4, 6, 8]]
let onceFn = once(fn)

onceFn(5, 7, 4); // 6
onceFn(2, 3, 6); // returns undefined without calling fn
