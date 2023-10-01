// Напишите функцию argumentsLength, которая возвращает количество переданных ей аргументов.

//2703

let argsArr = [5, 3];

//let argsArr = [{}, null, "3"];

var argumentsLength = function (...args) {
    // console.log(args.length);
    // const arguments = args;
    // console.log(arguments.length);
    console.log(args.length);
    return args.length;
};


argumentsLength(argsArr); // 3
