// Учитывая неотрицательное целое число x, верните квадратный корень из x, 
// округленный до ближайшего целого числа.
// Возвращаемое целое число также должно быть неотрицательным.
// Вы не должны использовать какие - либо встроенные функции или операторы экспоненты.
// 69

x = 8

var mySqrt = function (x) {

    if (x === 0 || x === 1) return x;

    let begin = 1;
    let end = x;
    while (begin <= end) {
        let middle = begin + Math.floor((end - begin) >> 1);
        let square = middle * middle;

        if (square === x) return middle;
        else if (square < x) begin = middle + 1;
        else end = middle - 1;
    }

    return end;


};


console.log(mySqrt(x))