// Учитывая целое число n, верните количество простых чисел, 
// которые строго меньше n.

// 204

n = 150;

var countPrimes = function (n) {


    if (n < 3) return 0;

    const count = new Int8Array(n);
    let answer = 1;

    for (let i = 3; i < n; i += 2) {
        if (!count[i]) {
            answer++;
            for (let j = i * i; j < n; j += 2 * i) {
                count[j] = 1;
            }
        }
    }

    return answer;

};


console.log(countPrimes(n))









// if (n <= 1) {
//     return 0;
// }

// let count = 1;

// for (let i = 3; i <= n; i++) {
//     if (isPrime(i)) {
//         count++
//     }
// }

// function isPrime(n) {
//     for (let i = 2; i <= Math.sqrt(n) + 1; i += 2) {
//         if (n % i === 0) {
//             return false;
//         }
//     }
//     return true;

// }

// return count;


