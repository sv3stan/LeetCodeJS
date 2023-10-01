// Учитывая целочисленный массив arr и функцию отображения fn, 
// вернуть новый массив с преобразованием, примененным к каждому элементу.
// Возвращаемый массив должен быть создан таким образом, чтобы returnArray[i] = fn(arr[i], i).
// Пожалуйста, решите это без встроенного метода Array.map.
//2635

let arr = [1, 2, 3];
//let fn = function plusone(n) { return n + 1; };

let fn = function plusI(n, i) { return n + i; };
//let fn = function constant() { return 42; };

function map(arr, fn) {
    //let newArray = []; //медденное решение
    var newArray = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {

        //    let newArray = fn(arr[i], i);
        newArray[i] = fn(arr[i], i);
    }
    return newArray;
};


console.log(map(arr, fn));