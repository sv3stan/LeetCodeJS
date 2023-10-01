//Учитывая целое число x, вернуть true, если x является
//палиндром , и false в противном случае.
// 9


// var isPalindrome = function (x) {
//     const inputArray = Array.from(String(x), Number);
//     for (let i = 0; i < inputArray.length / 2; i++) {
//         if (inputArray[i] != inputArray[inputArray.length - i - 1]) {
//             return false;
//         }
//     }
//     return true;
// };

var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }

    let reversed = 0;
    let original = x;

    while (x > 0) {
        const digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }
    return original === reversed;
};

console.log(isPalindrome(12321));
