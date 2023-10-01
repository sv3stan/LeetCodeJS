// Учитывая целочисленный массив nums, функцию редуктора fn и начальное значение init, верните уменьшенный массив.
// Уменьшенный массив создается применением следующей операции: val = fn(init, nums[0]), val = fn(val, nums[1]), 
// val = fn(val, nums[2]), ... до тех пор, пока каждый элемент массива не будет обработан.Возвращается окончательное значение val.
// Если длина массива равна 0, он должен вернуть init.
// Пожалуйста, решите эту проблему, не используя встроенный метод Array.reduce.

//2626

let nums = [1, 2, 3, 4];
let fn = function sum(accum, curr) { return accum + curr; }
//let fn = function sum(accum, curr) { return accum + curr * curr; }
let init = 100;
val = fn(init, nums[0])


function reduce(nums, fn, init) {
    //let acc = init;
    nums.forEach(item => init = + fn(init, item))
    return init;
};

console.log(reduce(nums, fn, init));