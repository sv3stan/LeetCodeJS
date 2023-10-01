// Учитывая массив arr и размер размера фрагмента, вернуть массив фрагментов.
// Массив с фрагментами содержит исходные элементы в массиве, но состоит из 
// подмассивов, каждый из которых имеет размер длины. Длина последнего подмассива 
// может быть меньше size, если arr.length не делится нацело на size.
// Вы можете предположить, что массив является результатом JSON.parse.
// Другими словами, это действительно JSON.
// Пожалуйста, решите ее, не используя функцию _.chunk в lodash.
//2677

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let size = 3;
//let arr = [1, 9, 6, 3, 2];

function chunk(arr, size) {
    // let result = [];
    // let i = 0;
    // while (i < arr.length) {
    //     if ((i % size) === 0) {
    //         result.push([]);
    //     }
    //     result[Math.floor(i / size)].push(arr[i])
    //     i++;
    // }
    // return result;

    let result = [];
    let i = 0;
    while (i < arr.length) {
        if ((i % size) === 0) {
            result.push([]);
        }
        result[Math.floor(i / size)] = arr.slice(i, i + size);
        i += size;
    }
    return result;


    //console.log(arr.length + ' - arr.length');
    // for (let i = 0 + count * size; i < arr.length; i += size) {
    //     console.log(i + ' - i');
    //     //console.log(size + ' - size');
    //     result.push([]);
    //     for (let j = 0; j < size; j++) {
    //         console.log(j + ' - j');
    //         result[count].push(arr[i + j]);
    //         console.log(arr[i + j] + ' - arr[i+j]');
    //         console.log(result);
    //     }
    //     count++;
    // }


};

console.log(chunk(arr, size));