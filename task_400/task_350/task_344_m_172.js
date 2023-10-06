// Учитывая целое число n, верните количество конечных нулей в n!.
// Обратите внимание, что н! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
// 172

n = 8;

var trailingZeroes = function (n) {


    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;

};

console.log(trailingZeroes(n))













// let count = 0;
// let result = 1;
// for (let i = 1; i <= n; i++) {
//     result *= i;
// }
// console.log(result)
// result = result.toString(10);

// for (const ch of result) {
//     if (ch === '0') count++
// }

// console.log(result[2])
// return count