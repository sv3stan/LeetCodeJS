// Учитывая положительное целое число n, 
// найдите ведущее целое число x такое, что:
// Сумма всех элементов от 1 до x включительно равна 
// сумме всех элементов от x до n включительно.
// Возвращает сводное целое число x.Если такого целого 
// числа не существует, верните - 1. Гарантируется, 
// что для данного входа будет не более одного сводного индекса.

// 2485

n = 8;

var pivotInteger = function (n) {

    if (n === 1) return 1;

    let left = 1;
    let right = n;
    let leftSum = 1;
    let rightSum = n;

    while (left < right) {
        console.log(left)
        if (leftSum < rightSum) {
            left++;
            leftSum += left;
        } else {
            right--;
            rightSum += right;
        }

        if (leftSum === rightSum && left === right) {
            return left;
        }

    }


    return -1;

};


console.log(pivotInteger(n))






// for (let i = 1; i <= n; i++) {

//     let left = 0;
//     let right = 0;

//     for (let j = 1; j <= i; j++) {

//         left += j;

//     }

//     for (let k = i; k <= n; k++) {

//         right += k

//     }

//     if (left === right) {
//         return i;
//     }

// }

// return -1;


















// if (n === 1) return 1;
// let sum = 0;
// let max = 0;
// let pivot = -1;
// const hash = new Set();

// for (let i = 1; i < n; i++) {
//     sum += i
//     hash.add(sum);
// }

// sum = 0;
// for (let i = n; i > 0; i--) {
//     sum += i;
//     if (hash.has(sum)) {
//         if (sum > max) {
//             max = sum;
//             pivot = i;
//         }
//     }
// }
// return pivot;