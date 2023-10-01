// Числа Фибоначчи, обычно обозначаемые F(n), образуют последовательность, 
// называемую последовательностью Фибоначчи, так что каждое число является 
// суммой двух предыдущих, начиная с 0 и 1. То есть,
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), для n > 1.
// Учитывая n, вычислить F(n).
// 509


n = 4;
n = 14521;
//n = 1;
function nthFibonacci(n) {
    const mod = BigInt(1000000007);
    if (n == 0) return 0n;
    if (n == 1) return 1n;
    let sum = [0n, 1n]
    for (let i = 2; i < n; i++) {
        sum[i] = (sum[i - 1] + sum[i - 2]) % mod;
    }
    return Number((sum[n - 1] + sum[n - 2]) % mod);


}

console.log(nthFibonacci(n))



//function matrixMultiply(a, b) {
    //     const mod = BigInt(1000000007);
    //     const res = [];

    //     for (let i = 0; i < a.length; i++) {
    //         const row = [];
    //         for (let j = 0; j < b[0].length; j++) {
    //             let sum = BigInt(0);
    //             for (let k = 0; k < a[0].length; k++) {
    //                 sum = (sum + BigInt(a[i][k]) * BigInt(b[k][j])) % mod;
    //             }
    //             row.push(sum);
    //         }
    //         res.push(row);
    //     }

    //     return res;
    // }

    // function matrixExp(base, exp) {
    //     if (exp === 0) {
    //         const size = base.length;
    //         const identity = Array.from({ length: size }, (_, i) =>
    //             Array.from({ length: size }, (_, j) => (i === j ? 1 : 0))
    //         );
    //         return identity;
    //     }

    //     if (exp % 2 === 0) {
    //         const temp = matrixExp(base, exp >> 1);
    //         return matrixMultiply(temp, temp);
    //     } else {
    //         const temp = matrixExp(base, (exp - 1) >> 1);
    //         return matrixMultiply(matrixMultiply(temp, temp), base);
    //     }
    // }


    // if (n === 0) {
    //     return 0;
    // }

    // const baseMatrix = [[1, 1], [1, 0]];
    // const resultMatrix = matrixExp(baseMatrix, n - 1);
    // return resultMatrix[0][0];
    //const memo = new Map();
    // Решение при n = 14521; вызвало переполнение стека на GFG
    // function fibMemo(n, memo) {
    //     if (memo.has(n)) {
    //         return memo.get(n);
    //     }

    //     if (n <= 1) {
    //         return n;
    //     }

    //     memo.set(n, fibMemo(n - 1, memo) + fibMemo(n - 2, memo));
    //     return memo.get(n);
    // }

    // return fibMemo(n, memo) % 1000000007;




    // решение не прошло проверку на GFG превыщен лимит времени
    // if (n <= 1) {
    //     return n;
    // }

    // let prev = BigInt(0);
    // let curr = BigInt(1);

    // for (let i = 2; i <= n; i++) {
    //     const next = prev + curr;
    //     prev = curr;
    //     curr = next;
    // }


    // return curr % BigInt(1000000007);
