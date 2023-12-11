// Учитывая массив целых чисел, отсортированный в порядке неубывания, 
// в массиве есть ровно одно целое число, которое встречается более 
// чем в 25 % случаев, верните это целое число.

// 1287

arr = [1, 2, 2, 6, 6, 6, 6, 7, 10]
arr = [1, 1]
var findSpecialInteger = function (arr) {

    const hash = new Map();
    const freq = Math.floor(arr.length / 4);

    for (let i = 0; i < arr.length; i++) {
        hash.set(arr[i], hash.get(arr[i]) + 1 || 1)
    }

    for (const [item, value] of hash) {
        if (value > freq) {
            return item;
        }
    }

    return -1;
};

console.log(findSpecialInteger(arr))