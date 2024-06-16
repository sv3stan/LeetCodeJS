// Реализуйте pow(x, n), который вычисляет x, возведенный в степень n(т.е.xn).
// 50

(x = 2.0), (n = 3);
// x = 2.10000, n = 3
// x = 2.00000, n = 10

// var myPow = function (x, n) {

//     if (n === 0) {
//         return 1;
//     }

//     if (n < 0) {
//         x = 1 / x;
//         n = -n;
//     }

//     let answer = 1;
//     while (n > 0) {
//         if (n % 2 === 1) {
//             answer *= x;
//         }
//         x *= x;
//         n = Math.floor(n / 2);
//     }

//     return answer.toFixed(5);

// };

let myPow = function (x, n) {
    // if (n < 0) {
    //     return 1 / myPow(x, -n);
    // }

    let answer = x;

    function rec(currentX) {
        if (n === 1) {
            return currentX;
        } else {
            n--;
            console.log(n);
            return rec(currentX * x);
        }
    }

    return rec(answer);
};

console.log(myPow(x, n));
