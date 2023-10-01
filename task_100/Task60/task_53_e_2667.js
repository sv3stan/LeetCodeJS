// Напишите функцию createHelloWorld. 
// Он должен возвращать новую функцию, которая всегда возвращает «Hello World».
//2667

let args = [{}, null, 42];

var createHelloWorld = function () {
    return function (...args) {
        const result = 'Hello World';
        //console.log('Hello World');
        return result;
    }
};


const f = createHelloWorld();
f(); // "Hello World"

console.log(f());
