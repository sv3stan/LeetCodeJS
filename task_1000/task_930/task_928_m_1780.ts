/**
Учитывая целое число n, верните True, если можно представлять n как сумму различных сил трех. В противном случае вернуть ложь. Целое число y - это сила трех, если существует целое число x, такое, что y == 3x.
 */

function checkPowersOfThree(n: number): boolean {
    while (n > 0) {
        const remainder = n % 3;
        if (remainder === 2) {
            return false;
        }
        n = Math.floor(n / 3);
    }
    return true;
}
