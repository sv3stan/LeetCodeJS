// Учитывая целое число n, верните true, если оно является степенью трех.
// В противном случае верните false.
// Целое число n является степенью трёх, если существует целое число x такое, что n == 3x.
// 326


n = 27;

var isPowerOfThree = function (n) {


    if (n <= 0) {
        return false; // Отрицательные числа и 0 не являются степенями 3.
    }

    //const logBase3 = Math.log(n) / Math.log(3);
    //const isPowerOfThree = n => 3 ** parseInt(Math.log(n) / Math.log(3)) === n

    // console.log(logBase3)
    //return isPowerOfThree;

    const log3 = Math.log(n) / Math.log(3);
    return Math.pow(3, Math.round(log3)) === n;
};


console.log(isPowerOfThree(n))