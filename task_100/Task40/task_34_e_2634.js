// Учитывая целочисленный массив arr и функцию фильтрации fn, 
// вернуть отфильтрованный массив filteredArr.
// Функция fn принимает один или два аргумента:
// arr[i] - номер из обр.
//     i - индекс обр[i]
// filteredArr должен содержать только те элементы из arr, 
// для которых выражение fn(arr[i], i) оценивается как истинное значение.
// Истинное значение — это значение, при котором логическое значение(значение) 
// возвращает значение true.
// Пожалуйста, решите это без встроенного метода Array.filter.

//2634

let fn = function greaterThan10(n) { return n > 10; };
//let fn = function firstIndex(n, i) { return i === 0; };
//let fn = function plusOne(n) { return n + 1 };
const arr = [0, 10, 20, 30];

//const arr = [-2, -1, 0, 1, 2];

var filter = function (arr, fn) {
    //var filteredArray = new Array(arr.length);
    console.log(filteredArray)
    var filteredArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;

};

console.log(filter(arr, fn));