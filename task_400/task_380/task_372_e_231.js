// Учитывая целое число n, верните true, если оно является степенью двойки.
// В противном случае верните false.
// Целое число n является степенью двойки, если существует целое число x такое, 
// что n == 2x.
// 231


n = 62;


var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo(n))









// if (n <= 0) return false;

// while (n > 1) {
//     if (n % 2 !== 0) return false;
//     n = n / 2;
// }

// return true;
