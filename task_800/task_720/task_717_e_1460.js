/**
Вам даны два целочисленных массива одинаковой длины target и arr. За один шаг вы можете выбрать любой непустой подмассив массива arr и перевернуть его. Вы можете сделать любое количество шагов.
Верните true, если вы можете сделать arr равным target, или false в противном случае.
 */

let target = [1, 2, 3, 3, 4, 4, 4];
let arr = [2, 4, 3, 4, 1, 3];
//(target = [1, 2, 3, 4]), (arr = [2, 4, 1, 3]);
// let canBeEqual = function (target, arr) {
//     if (target.length !== arr.length) return false;
//     const count = new Array(101).fill(0);
//     for (let num of target) count[num]++;
//     for (let num of arr) count[num]--;
//     return count.every(num => num === 0);
// };
let canBeEqual = function (target, arr) {
    const hash = new Map();
    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);
    }
    for (let i = 0; i < target.length; i++) {
        if (hash.has(target[i])) {
            hash.set(target[i], hash.get(target[i]) - 1);
            if (hash.get(target[i]) < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
};

console.log(canBeEqual(target, arr));
