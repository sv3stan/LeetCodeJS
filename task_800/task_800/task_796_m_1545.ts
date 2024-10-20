/**
Given two positive integers n and k, the binary string Sn is formed as follows:
S1 = "0"
Si = Si - 1 + "1" + reverse(invert(Si - 1)) for i > 1
Where + denotes the concatenation operation, reverse(x) returns the reversed string x, and invert(x) inverts all the bits in x (0 changes to 1 and 1 changes to 0).
For example, the first four strings in the above sequence are:
S1 = "0"
S2 = "011"
S3 = "0111001"
S4 = "011100110110001"
Return the kth bit in Sn. It is guaranteed that k is valid for the given n.
 */

let n = 3;
let k = 1;
function findKthBit(n, k) {
    // Базовый случай
    if (n === 1) {
        return '0'; // S1 = "0"
    }

    const mid = Math.pow(2, n - 1); // середина строки Sn

    if (k === mid) {
        return '1'; // центральная единица
    } else if (k < mid) {
        // рекурсивный поиск в первой половине
        return findKthBit(n - 1, k);
    } else {
        // рекурсивный поиск во второй половине (перевёрнутой и инвертированной)
        const mirrorPosition = 2 * mid - k;
        const result = findKthBit(n - 1, mirrorPosition);
        return result === '0' ? '1' : '0'; // инвертируем бит
    }
}

console.log(findKthBit(n, k));
